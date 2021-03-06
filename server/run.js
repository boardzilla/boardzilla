const AWS = require('aws-sdk');
const cluster = require('cluster');
const { cpus } = require('os');

const secretKey = process.env.SECRET_KEY || 'some secret';
const rabbitmqUrl = process.env.RABBIT_URL || 'some secret';
const s3GameBucket = process.env.S3_GAME_BUCKET;

const createServer = require('./server');

const port = parseInt(process.env.PORT || 3000);

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  const numCPUs = cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const s3Provider = new AWS.S3({ params: { Bucket: s3GameBucket } });
  const server = createServer({
    secretKey, rabbitmqUrl, s3Provider,
  });
  server.listen(port);
  console.log(`Worker ${process.pid} started`);
}
