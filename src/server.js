import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-body'
import KoaLogger from 'koa-logger'
import KoaStatic from 'koa-static'
import session from 'koa-generic-session'
import redisStore from 'koa-redis'
import dbInit from './db/index.js'
import { REDIS_CONF } from './config/redisConfig.js'
import * as routerApi from './routes/api/index.js'
import { CONSTANT } from './config/constant.js'
import './utils/env.js'
import { ErrorModel } from './model/ResultModel.js'

// 数据库连接
dbInit()

const app = new Koa()
onerror(app)
app.use(
  bodyparser({
    multipart: true, // 支持文件上传
    formidable: {
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    },
  })
)
app.use(json())
app.use(KoaLogger())
app.use(KoaStatic(CONSTANT.PUBLIC_PATH))
app.use(KoaStatic(CONSTANT.DIST_FOLDER_PATH))

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

Object.values(routerApi).forEach((item) => {
  app.use(item.routes(), item.allowedMethods())
})

app.on('error', (err, ctx) => {
  console.error('server', err, ctx)
  ctx.body = new ErrorModel({ data: err })
})

export default app
