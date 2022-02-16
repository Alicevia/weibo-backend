import { validateByAjv } from './validate.js'

const userSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      maxLength: 140,
      minLength: 1,
    },
  },
}
export function blogValidate(data, required) {
  return validateByAjv({ ...userSchema, required }, data)
}
