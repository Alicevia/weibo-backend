import Router from 'koa-router'

const router = Router()
router.get('/', async (ctx, next) => {
  ctx.body = {
    title: 'hello world',
  }
})

export default router
