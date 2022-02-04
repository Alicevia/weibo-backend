import Ajv from 'ajv'

const ajv = new Ajv({
  // allErrors: true,//输出所有错误
})

export function validateByAjv(schema, data = {}) {
  const valid = ajv.validate(schema, data)
  if (!valid) {
    return ajv.errors[0]
  }
  return false
}
