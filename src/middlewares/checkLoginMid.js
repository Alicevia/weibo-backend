import responseInfo from '../model/responseInfo.js'
import { ErrorModel } from '../model/ResultModel.js'

export async function checkIsLogin(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    await next()
    return
  }
  ctx.body = new ErrorModel(responseInfo.unLoginInfo)
}

export async function loginRedirect(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    await next()
  }
  // 未登录
  // ctx.redirect(`/login?url=${encodeURIComponent(ctx.url)}`)
}
