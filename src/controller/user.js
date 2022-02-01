import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'
import { createUser, getUserInfo } from '../services/user.js'
import { doCrypto } from '../utils/crypto.js'

// 检测是用户是否存在
export async function isExist(userName) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new SuccessModel({ data: userInfo, ...responseInfo.userNameExist })
  }
  return new SuccessModel(responseInfo.userNameNotExist)
}
// 注册用户
export async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName)
  if (userInfo) {
    return new ErrorModel(responseInfo.userNameExist)
  }
  try {
    await createUser({ userName, password: doCrypto(password), gender })
    return new SuccessModel(responseInfo.registerSuccessInfo)
  } catch (error) {
    return new ErrorModel({ ...responseInfo.registerFailedInfo, data: error })
  }
}

export async function login({ userName, password }) {
  const userInfo = await getUserInfo(userName, password)
  if (userInfo) {
    return new SuccessModel(responseInfo.loginSuccessInfo)
  }
  return new ErrorModel(responseInfo.loginFailedInfo)
}
