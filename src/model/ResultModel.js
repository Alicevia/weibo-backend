class BaseModel {
  constructor({ code, data, tip, message }) {
    this.code = code
    this.data = data
    this.tip = tip // 接口调用情况
    this.message = message
  }
}

class SuccessModel extends BaseModel {
  constructor({ data = null, tip = '操作成功', message } = {}) {
    super({
      code: 0,
      data,
      tip,
      message,
    })
  }
}

class ErrorModel extends BaseModel {
  constructor({ code, message, data, tip = '操作失败' }) {
    super({ code, message, data, tip })
  }
}

export { SuccessModel, ErrorModel }
