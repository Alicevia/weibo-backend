import Router from 'koa-router'
import { isExist, login, register } from '../../controller/user.js'

const userApiRouter = Router()
userApiRouter.prefix('/user')
userApiRouter.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login({ userName, password })
})

userApiRouter.post('/register', async (ctx, next) => {
  const { userName, password, gender } = ctx.request.body
  ctx.body = await register({ userName, password, gender })
})

userApiRouter.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})

export default userApiRouter
