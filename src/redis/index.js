import redis from 'redis'
import { REDIS_CONF } from '../config/redisConfig.js'

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', (err) => {
  console.log('redis is error', err)
})

export default redisClient
