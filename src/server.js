import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import KoaLogger from 'koa-logger'
import KoaStatic from 'koa-static'
import session from 'koa-generic-session'
import redisStore from 'koa-redis'
import path from 'path'
import dbInit from './db/index.js'
import { REDIS_CONF } from './config/redisConfig.js'
import userApiRouter from './routes/api/user.js'
import index from './routes/api/index.js'
import { CONSTANT } from './config/constant.js'

dbInit()

const app = new Koa()
onerror(app)
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(json())
app.use(KoaLogger())
app.use(KoaStatic(`${path.resolve()}/src/public`))

app.keys = CONSTANT.SESSION_SECRET_KEY
app.use(
  session({
    key: 'weibo.sid',
    prefix: 'weibo:sess:',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 24 * 3600 * 1000,
    },
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.host}`,
    }),
  })
)

app.use(index.routes(), index.allowedMethods())
app.use(userApiRouter.routes(), userApiRouter.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server', err, ctx)
})

export default app
