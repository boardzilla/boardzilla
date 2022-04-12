const AWS = require('aws-sdk');

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
const secretKey = process.env.SECRET_KEY || 'some secret';
const zkConnectionString = process.env.ZK_CONNECTION_STRING || 'localhost:2181';
const s3GameBucket = process.env.S3_GAME_BUCKET;

const createServer = require('./server');

const port = parseInt(process.env.PORT || 3000);

const s3Provider = new AWS.S3({ params: { Bucket: s3GameBucket } });
const server = createServer({
  redisUrl, secretKey, zkConnectionString, s3Provider,
});
server.listen(port);
