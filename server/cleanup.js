const db = require('./models');
const amqp = require('amqplib');

async function cleanup() {
    const rabbit = await amqp.connect(this.rabbitmqUrl);
    const channel = await rabbit.createChannel()
    const actionExchangeName = 'session-actions';
    const eventExchangeName = 'session-events';

	const [results, _] = await db.sequelize.query(
	  'select "sessionId", max("createdAt") as max_created_at from "SessionActions" group by "sessionId" having NOW() - max("createdAt") >= interval \'24 hours\'',
	);

	for (const row of results) {
		console.log(`Deleting session ${row.sessionId}`);
		await db.SessionAction.destroy({where: {sessionId: row.sessionId}});
		await db.Session.destroy({where: {id: row.sessionId}});
	    await channel.deleteExchange(`${eventExchangeName}-${row.sessionId}`);
	    await channel.deleteQueue(`${actionExchangeName}-${row.sessionId}-queue`);
	}

	console.log("Done")
	process.exit(0)
}

cleanup()

