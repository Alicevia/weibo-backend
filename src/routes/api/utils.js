import Router from 'koa-router'
import koaForm from 'formidable-upload-koa'
import { checkIsLogin } from '../../middlewares/checkLoginMid.js'
import { saveFile } from '../../controller/utils.js'

const utilsRouter = Router()
utilsRouter.prefix('/utils')
utilsRouter.post(
  '/upload',
  checkIsLogin,
  koaForm({
    // maxFileSize: CONSTANT.FILE_MAX_SIZE, // 大小为 1m
  }),
  async (ctx) => {
    const { file } = ctx.req.files
    const { size, path, name, type } = file
    // const { fields } = ctx.req // 获取formData的其他参数
    ctx.body = await saveFile({ size, filePath: path, name, type })
  }
)

export { utilsRouter }
