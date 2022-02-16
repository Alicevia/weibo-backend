import Router from 'koa-router'
import { createWeiBo } from '../../controller/blog.js'
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

export { blogRouter }
