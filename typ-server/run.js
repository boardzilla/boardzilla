const createServer = require('./server')
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"
const secretKey = process.env.SECRET_KEY || "some secret"

process.env.NODE_ENV = 'development'
const server = createServer({redisUrl, secretKey/* , name: 'local game', path: '/Users/ahull/typ-server/test/fixtures/numberGuesser/' */})
server.listen(3000)
