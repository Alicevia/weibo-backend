import Router from 'koa-router'
import { checkIsLogin } from '../../middlewares/checkLoginMid.js'
import { saveFile } from '../../controller/utils.js'

const utilsRouter = Router()
utilsRouter.prefix('/utils')
utilsRouter.post('/upload', checkIsLogin, async (ctx) => {
  const { file } = ctx.request.files

  if (!file) {
    return
  }
  const { size, path, name, type } = file

  ctx.body = await saveFile({ size, filePath: path, name, type })

  // const { fields } = ctx.req // 获取formData的其他参数
})

export { utilsRouter }
