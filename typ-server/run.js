const createServer = require('./server')
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379"
const secretKey = process.env.SECRET_KEY || "some secret"
const zkConnectionString = process.env.ZK_CONNECTION_STRING || throw("must define")
const port = parseInt(process.env.PORT || 3000)
const server = createServer({redisUrl, secretKey, zkConnectionString})
server.listen(port)
