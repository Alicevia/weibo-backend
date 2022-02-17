import Router from 'koa-router'
import { createWeiBo, getProfileBlogList } from '../../controller/blog.js'
import { checkIsLogin } from '../../middlewares/checkLoginMid.js'
import { genValidator } from '../../middlewares/validatorMid.js'
import { blogValidate } from '../../validator/blog.js'

const blogRouter = Router()

blogRouter.prefix('/blog')

blogRouter.post(
  '/createWeiBo',
  checkIsLogin,
  genValidator(blogValidate, ['content']),
  async (ctx) => {
    const { content, image } = ctx.request.body
    ctx.body = await createWeiBo({ ctx, image, content })
  }
)
blogRouter.get('/blogList', checkIsLogin, async (ctx) => {
  const { userName, page } = ctx.query
  ctx.body = await getProfileBlogList({
    userName,
    page,
  })
})

export { blogRouter }
