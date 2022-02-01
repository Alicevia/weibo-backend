const responseInfo = {
  userNameExist: {
    code: 10001,
    message: '用户名已存在',
  },
  userNameNotExist: {
    code: 10003,
    message: '用户名不存在',
  },
  registerFailedInfo: {
    code: 10002,
    message: '注册失败',
  },
  registerSuccessInfo: {
    message: '注册成功',
  },
  loginSuccessInfo: {
    message: '登录成功',
  },
  loginFailedInfo: {
    message: '用户名或密码错误',
  },
}

export default responseInfo
