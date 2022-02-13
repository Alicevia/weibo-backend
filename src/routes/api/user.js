import Router from 'koa-router'
import {
  changePassword,
  changeUserInfo,
  clearSession,
  getUserInfoBySession,
  isExist,
  login,
  register,
} from '../../controller/user.js'
import { checkIsLogin } from '../../middlewares/checkLoginMid.js'
import { genValidator } from '../../middlewares/validatorMid.js'
import { userValidate } from '../../validator/user.js'

const userApiRouter = Router()
userApiRouter.prefix('/user')
// 用户登录
userApiRouter.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  ctx.body = await login({ userName, password, ctx })
})
// 用户注册
userApiRouter.post(
  '/register',
  genValidator(userValidate),
  async (ctx, next) => {
    const { userName, password, gender } = ctx.request.body
    ctx.body = await register({ userName, password, gender })
  }
)
// 用户是否存在
userApiRouter.post('/isExist', async (ctx, next) => {
  const { userName } = ctx.request.body
  ctx.body = await isExist(userName)
})
// 用户基本信息
userApiRouter.get('/userInfo', checkIsLogin, async (ctx) => {
  ctx.body = await getUserInfoBySession(ctx)
})
// 修改用户信息
userApiRouter.patch(
  '/changeUserInfo',
  checkIsLogin,
  genValidator(userValidate),
  async (ctx, next) => {
    const { nickName, city, picture } = ctx.request.body
    ctx.body = await changeUserInfo({ ctx, nickName, city, picture })
  }
)
// 修改用户密码
userApiRouter.patch(
  '/changePassword',
  checkIsLogin,
  genValidator(userValidate, ['password', 'newPassword']),
  async (ctx) => {
    const { password, newPassword } = ctx.request.body
    ctx.body = await changePassword({ ctx, password, newPassword })
  }
)
// 用户退出
userApiRouter.post('/logout', checkIsLogin, async (ctx) => {
  ctx.body = await clearSession(ctx)
})
export { userApiRouter }
