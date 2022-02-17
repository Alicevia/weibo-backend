import { validateByAjv } from './validate.js'

const blogSchema = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      maxLength: 140,
      minLength: 1,
    },
    image: {
      type: 'string',
      maxLength: 255,
    },
  },
}
export function blogValidate(data, required) {
  return validateByAjv({ ...blogSchema, required }, data)
}
