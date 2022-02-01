import { UserModel } from '../db/model/index.js'
import { formatUser, generateWhereObj } from './format.js'
export async function getUserInfo(userName, password) {
  const res = await UserModel.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: generateWhereObj({
      userName,
      password,
    }),
  })
  if (res == null) {
    return res
  }
  return formatUser(res.dataValues)
}
// 创建用户
export async function createUser({ userName, password, gender = 3, nickName }) {
  const res = await UserModel.create({
    userName,
    password,
    gender,
    nickName: nickName || userName,
  })
  return res.dataValues
}
