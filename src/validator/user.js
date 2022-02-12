import { validateByAjv } from './validate.js'

const userSchema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      pattern: '^[a-zA-Z0-9_]+$',
      maxLength: 255,
      minLength: 2,
    },
    password: {
      type: 'string',
      maxLength: 255,
      minLength: 3,
    },
    newPassword: {
      type: 'string',
      maxLength: 255,
      minLength: 2,
    },
    nickName: {
      type: 'string',
      maxLength: 255,
    },
    picture: {
      type: 'string',
      maxLength: 255,
    },
    city: {
      type: 'string',
      maxLength: 255,
      minLength: 2,
    },
    gender: {
      type: 'number',
      maxLength: 3,
      minLength: 1,
    },
  },
}

export function userValidate(data, required) {
  return validateByAjv({ ...userSchema, required }, data)
}
