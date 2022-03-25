class TypServer {
  run({ name, path }) {
    const createServer = require('./server')
    const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"
    const secretKey = process.env.SECRET_KEY || "some secret"
    const port = parseInt(process.env.PORT || 3000)

    const express = createServer({redisUrl, secretKey, name, path })
    express.listen(port);
  }
}

const typServer = new TypServer()

module.exports = typServer
