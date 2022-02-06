import responseInfo from '../model/responseInfo.js'
import { ErrorModel, SuccessModel } from '../model/ResultModel.js'
import { createUser, getUserInfo, updateUser } from '../services/user.js'
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
// 用户登录
export async function login({ userName, password, ctx }) {
  const userInfo = await getUserInfo(userName, doCrypto(password))
  if (userInfo) {
    ctx.session.userInfo = userInfo
    return new SuccessModel(responseInfo.loginSuccessInfo)
  }
  return new ErrorModel(responseInfo.loginFailedInfo)
}
// 根据session获取用户信息
export async function getUserInfoBySession(ctx) {
  if (ctx.session && ctx.session.userInfo) {
    return new SuccessModel({ data: ctx.session.userInfo })
  }
  return new ErrorModel(responseInfo.unLoginInfo)
}
// 更新用户信息
export async function changeUserInfo({ ctx, nickName, city, picture }) {
  const { userName } = ctx.session.userInfo
  nickName = nickName || userName
  const result = await updateUser({ nickName, picture, city }, { userName })
  if (result) {
    Object.assign(ctx.session.userInfo, {
      nickName,
      city,
      picture,
    })
    return new SuccessModel(responseInfo.userInfoChangeSuccess)
  }
  return new ErrorModel(responseInfo.userInfoChangeFailed)
}
