const amqp = require('amqplib');
const db = require('./models');

const actionExchangeName = 'session-actions';
const eventExchangeName = 'session-events';

async function cleanup() {
  const rabbit = await amqp.connect(process.env.RABBIT_URL);
  const channel = await rabbit.createChannel();

  const [oldSessionResults, _] = await db.sequelize.query(
	  'select "sessionId", max("createdAt") as max_created_at from "SessionActions" group by "sessionId" having NOW() - max("createdAt") >= interval \'24 hours\'',
  );

  await cleanupSessionIds(channel, oldSessionResults.map(r => r.sessionId));

  const [emptySessionResults, __] = await db.sequelize.query(
    'select id from "Sessions" as s where NOW() - "createdAt" >= interval \'24 hours\' and NOT EXISTS(select id from "SessionActions" where "sessionId" = s.id)',
  );

  await cleanupSessionIds(channel, emptySessionResults.map(r => r.id));

  console.log('Done');
  process.exit(0);
}

cleanup();

async function cleanupSessionIds(channel, sessionIds) {
  for (const sessionId of sessionIds) {
    console.log(`Deleting session ${sessionId}`);
    await db.SessionAction.destroy({ where: { sessionId } });
    await db.ElementLock.destroy({ where: { sessionId } });
    await db.Session.update({ state: 'expired' }, { where: { id: sessionId } });
    await channel.deleteExchange(`${eventExchangeName}-${sessionId}`);
    await channel.deleteQueue(`${actionExchangeName}-${sessionId}-queue`);
  }
}
