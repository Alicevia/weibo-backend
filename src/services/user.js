import { UserModel } from '../db/model/index.js'
import { formatUser, filterInvalidKey } from './format.js'

export async function getUserInfo(userName, password) {
  const res = await UserModel.findOne({
    attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
    where: filterInvalidKey({
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
// 更新用户信息
export async function updateUser(
  { password: newPassword, nickName, city, picture },
  { password, userName }
) {
  const res = await UserModel.update(
    filterInvalidKey({ password: newPassword, nickName, city, picture }),
    {
      where: filterInvalidKey({ password, userName }),
    }
  )
  return res[0] > 0
}
