

const onWssConnection = async (ws, req) => {
  const sessionUser = await db.SessionUser.findOne({where: {userId: req.userId, sessionId: req.sessionId}})
  if (!sessionUser) {
    return ws.close(4001)
  }

  // check the lock value, if it's set, send it to the correct server listed there, if it fails acquire the lock and create an instance
  // keep retrying until something is done

  const redlock = new Redlock(
    // You should have one client for each independent redis node
    // or cluster.
    [redisUrl],
    {
      // The expected clock drift; for more details see:
      // http://redis.io/topics/distlock
      driftFactor: 0.01, // multiplied by lock ttl to determine drift time

      // The max number of times Redlock will attempt to lock a resource
      // before erroring.
      retryCount: 10,

      // the time in ms between attempts
      retryDelay: 200, // time in ms

      // the max time in ms randomly added to retries
      // to improve performance under high contention
      // see https://www.awsarchitectureblog.com/2015/03/backoff.html
      retryJitter: 200, // time in ms
    }
  );

  let lock, subscriber, lockRenewTimer
  const lockLeaseTime = 5000
  const session = await sessionUser.getSession()
  const game = session.gameId === -1 ? localDevGame : await session.getGame()
  const gameLockName = `game-lock-${session.gameId}`
  const gameMoveChannelName = `game-move-${session.gameId}`
  const gameStateChannelName = `game-state-${session.gameId}`

  const closeAll = async () => {
    if (lock) {
      try {
        await lock.release()
      } catch (e) {
        console.error("error while releasing", e)
      }
    }

    if (subscriber) {
      subscriber.unsubscribe()
      subscriber.quit()
    }

    if (lockRenewTimer) {
      clearInterval(lockRenewTimer)
    }
  }

  try {
    let lock = await redlock.acquire([gameLockName], lockLeaseTime);
  } catch (e) {
    lock = null
  }

  // this is the actual game!
  if (lock) {
    const lockRenewer = async () => {
      try {
        lock = await lock.extend(lockLeaseTime)
        lockRenewTimer = setTimeout(lockRenewer, lockLeaseTime - 1000)
        await pumpGameState() // just in case!
      } catch (e) {
        await closeAll()
      }
    }

    lockRenewTimer = setTimeout(lockRenewer, lockLeaseTime - 1000)
    subscriber = redis.createClient(redisUrl)

    const gameInstance = new GameInterface()
    const vm = new NodeVM({
      console: 'inherit',
      sandbox: {game: gameInstance},
      require: {
        external: true,
      },
    })

    const serverBuffer = game.file("/server.js")
    vm.run(serverBuffer.toString())
    let lastPlayerView = null
    let lastPlayers = null
    let locks = []

    if (session.lastState) {
      gameInstance.setState(session.lastState)
    }

    const publishGameMessage = async (message) => {
      const data = JSON.stringify(message)
      await publisher.publish(gameStateChannelName, data)
      await wss.send(data)
    }

    const writeGameState = async () => {
      const newPlayerViews = gameInstance.getPlayerViews()
      _.each(newPlayerViews, async (v, k) => {
        publisher.set(`${gameStateChannelName}-${v}`, k)

        if (k === )
      if (!_.isEqual(newPlayerView, lastPlayerView)) {
        ws.send(JSON.stringify({type: 'update', data: newPlayerView}))
        lastPlayerView = newPlayerView
      }

      })

      await publishGameState({type: 'state'})
    }

    const startGame = async () => {
      await db.sequelize.transaction(async transaction => {
        await session.reload()
        if (session.lastState && session.lastState.phase !== 'setup') {
          throw new Error("Cannot start game unless setup phase")
        }
        try {
          gameInstance.start()
          await session.update({lastState: gameInstance.getState()}, {transaction})
        } catch(e) {
          return ws.send(JSON.stringify(e.message))
        }

        await pumpGameState()
      })
    }

    const gameAction = async ([action, ...args]) => {
      console.log('gameAction', action, args)

      const persist = gameInstance.setState(session.lastState)
      try {
        gameInstance.receiveAction(action, args)
      } catch(e) {
        ws.send(JSON.stringify(e.message))
      }
      if (persist) {
        await db.sequelize.transaction(async transaction => {
          if (!session.lastState) {
            throw new Error("No lastState")
          }
          await session.update({lastState: gameInstance.getState()}, {transaction})
        })
      }

      const newPlayerView = gameInstance.getPlayerView()
      if (!_.isEqual(newPlayerView, lastPlayerView)) {
        ws.send(JSON.stringify({type: 'update', data: newPlayerView}))
        lastPlayerView = newPlayerView
      }

      await publishGameState({type: 'state'})
    }

    const updateGamePlayers = async () => {
      const sessionUsers = await db.SessionUser.findAll({
        where: {sessionId: session.id},
        order: [['userId']],
        include: {
          model: db.User,
          attributes: ['id', 'name'],
        },
      })
      const users = sessionUsers.map(s => s.User)
      users.forEach(u => {
        gameInstance.addPlayer(u.id)
      })
      if (!_.isEqual(lastPlayers, users)) {
        ws.send(JSON.stringify({type: 'players', players: users}))
        lastPlayers = users
      }
    }

    const updateGameState = async () => {
      await session.reload()
      gameInstance.setState(session.lastState)
      const newPlayerView = gameInstance.getPlayerView()
      if (!_.isEqual(newPlayerView, lastPlayerView)) {
        ws.send(JSON.stringify({type: 'update', data: newPlayerView}))
        lastPlayerView = newPlayerView
      }
    }

    const updateLocks = async () => {
      locks = await session.getElementLocks().map(lock => ({user: lock.userId, key: lock.element}))
      ws.send(JSON.stringify({type: 'updateLocks', data: locks}))
    }

    const refresh = async () => {
      await updateGameState()
      ws.send(JSON.stringify({type: 'update', data: gameInstance.getPlayerView()}))
    }

    const requestLock = async ({key}) => {
      try {
        await db.ElementLock.destroy({where: {
          sessionId: session.id,
          element: key,
          updatedAt: {[Sequelize.Op.lt]: new Date() - 60000}
        }})
        await db.ElementLock.create({ sessionId: session.id, userId: sessionUser.userId, element: key })
      } catch (e) {
        if (!(e instanceof db.Sequelize.UniqueConstraintError)) {
          throw e
        }
      }
      await publisher.publish(gameStateChannelName, JSON.stringify({type: 'locks'}))
      await wss.send(JSON.stringify({type: 'state'}))
    }

    const releaseLock = async ({key}) => {
      await db.ElementLock.destroy({where: { sessionId: session.id, userId: sessionUser.userId, element: key }})
      await publisher.publish(gameStateChannelName, JSON.stringify({type: 'locks'}))
    }

    const drag = ({key, x, y}) => {
      const lock = locks.find(lock => lock.key == key)
      console.log('drag', lock, sessionUser.userId)
      if (!lock || lock.user != sessionUser.userId) return
      publisher.publish(gameStateChannelName, JSON.stringify({type: 'drag', user: lock.user, key, x, y}))
    }

    const updateElement = ({user, key, x, y}) => {
      if (user == sessionUser.userId) return
      ws.send(JSON.stringify({type: 'updateElement', data: {key, x, y}}))
    }

    const messageHandler = async (message) => {
      switch(message.type) {
        case 'startGame': return await startGame()
        case 'action': return await gameAction({playerId: message.playerId, ...message.payload})
        case 'refresh': return await refresh()
        case 'requestLock': return await requestLock({playerId: message.playerId, ...message.payload})
        case 'releaseLock': return await releaseLock({playerId: message.playerId, ...message.payload})
        case 'drag': return await drag({playerId: message.playerId, ...message.payload})
      }
    }

    await updateGamePlayers()
    await updateGameState()

    ws.on("message", data => {
      let message
      try {
        message = JSON.parse(data)
      } catch(e) {
        console.error(`invalid json ${data}`)
      }
      console.log('--> onmessage', req.userId, message)

      messageHandler({playerId: req.userId, ...message})
    })
    subscriber.on("message", async (channel, data) => {
      const message = JSON.parse(data)
      await messageHandler(message)
    })

    // redis
    //   needs an update when players change
    //   needs an update when state changes

    ws.on("close", async () => {
      await closeAll()
    })

    ws.on("error", async error => {
      await closeAll()
      throw error
    })
  } else {
    // proxy to the real server

    subscriber = redis.createClient(redisUrl)
    subscriber.subscribe(gameStateChannelName)
    subscriber.on("message", async (channel, data) => {
      const message = JSON.parse(data)
      switch(message.type) {
        case 'state':
          // read from redis, send it on!
          break
      }


      await wss.send(data)
    })
    await publisher.publish(gameStateChannelName, JSON.stringify({type: 'state'}))

    wss.on('message', async (m) => {

    })

    ws.on('message', async (m) => await wss.send(m))
    ws.on('close', async () => await closeAll())
    ws.on('error', async (e) => {
      console.error("error in ws proxy", e)
      await closeAll()
    })
  }
}
