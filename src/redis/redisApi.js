import redisClient from './index.js'

export function setRedis(key, value, timeout = 3600) {
  redisClient.set(key, value)
  redisClient.expire(key, timeout)
}

export function getRedis(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, data) => {
      if (err) return reject(err)
      if (data == null) return resolve(data)
      try {
        return resolve(JSON.parse(data))
      } catch (error) {
        return resolve(data)
      }
    })
  })
}
