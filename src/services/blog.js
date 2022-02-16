import { BlogModel } from '../db/model/index.js'

export async function createBlog({ userId, content, image }) {
  const res = await BlogModel.create({
    userId,
    content,
    image,
  })
  return res.dataValues
}
