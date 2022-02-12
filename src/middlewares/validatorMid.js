import responseInfo from '../model/responseInfo.js'
import { ErrorModel } from '../model/ResultModel.js'

export function genValidator(validator, required) {
  return async (ctx, next) => {
    const error = validator(ctx.request.body, required)
    if (error) {
      // 存在错误
      ctx.body = new ErrorModel({
        ...responseInfo.userSchemaFailedInfo,
        data: error,
      })
      return
    }
    await next()
  }
}
