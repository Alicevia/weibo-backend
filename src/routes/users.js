import Router from 'koa-router'

const users = Router()
users.prefix('/users')

users.get('/', async (ctx, next) => {
  const { session } = ctx

  if (session.num === undefined) {
    session.num = 0
  } else {
    session.num += 1
  }

  ctx.body = {
    title: 'hello world',
    viewNum: session.num,
  }
  next()
})

export default users
