import xss from 'xss'
import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'
import { createBlog, getBlogListByUser } from '../services/blog.js'

export async function createWeiBo({ ctx, content, image }) {
  const { id: userId } = ctx.session.userInfo
  try {
    const data = await createBlog({ content: xss(content), image, userId })
    return new SuccessModel({ ...responseInfo.createWeiBoSuccess, data })
  } catch (error) {
    return new ErrorModel({ ...responseInfo.createWeiBoFail, data: error })
  }
}

export async function getProfileBlogList({ userName, page }) {
  try {
    const data = await getBlogListByUser({ userName, page })
    return new SuccessModel({ data })
  } catch (error) {
    return new ErrorModel({ ...responseInfo.getBlogListFail, data: error })
  }
}
