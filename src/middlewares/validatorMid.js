import responseInfo from '../model/responseInfo.js'
import { ErrorModel } from '../model/ResultModel.js'

export function genValidator(validator) {
  return async (ctx, next) => {
    const error = validator(ctx.request.body)
    if (error) {
      // 存在错误
      ctx.body = new ErrorModel(responseInfo.userSchemaFailedInfo)
      return
    }
    await next()
  }
}
