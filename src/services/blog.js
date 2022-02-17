import { CONSTANT } from '../config/constant.js'
import { BlogModel, UserModel } from '../db/model/index.js'
import { filterInvalidKey, formatUser } from './format.js'

export async function createBlog({ userId, content, image }) {
  const res = await BlogModel.create({
    userId,
    content,
    image,
  })
  return res.dataValues
}

export async function getBlogListByUser({
  userName,
  page = 0,
  pageSize = CONSTANT.PAGE_SIZE,
}) {
  const result = await BlogModel.findAndCountAll({
    limit: pageSize,
    offset: pageSize * page,
    order: [['id', 'desc']],
    include: [
      {
        model: UserModel,
        attributes: ['userName', 'nickName', 'picture'],
        where: filterInvalidKey({ userName }),
      },
    ],
  })
  const { rows, count } = result
  const blogList = rows
    .map((item) => item.dataValues)
    .map((item) => {
      item.user = formatUser(item.user.dataValues)
      return item
    })
  return { blogList, count }
}
