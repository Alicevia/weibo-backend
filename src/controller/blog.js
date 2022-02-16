import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'
import { createBlog } from '../services/blog.js'

export async function createWeiBo({ ctx, content, image }) {
  const { id: userId } = ctx.session.userInfo
  try {
    const data = await createBlog({ content, image, userId })
    return new SuccessModel({ ...responseInfo.createWeiBoSuccess, data })
  } catch (error) {
    return new ErrorModel({ ...responseInfo.createWeiBoFail, data: error })
  }
}
