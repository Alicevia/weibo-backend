import { CONSTANT } from '../config/constant.js'

function formatUserPicture(obj) {
  if (!obj.picture) obj.picture = CONSTANT.DEFAULT_PICTURE
  return obj
}

export function formatUser(list) {
  if (!list) return list
  if (Array.isArray(list)) {
    return list.map(formatUserPicture)
  }
  return formatUserPicture(list)
}
export function filterInvalidKey(obj) {
  const temp = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined) {
      temp[key] = obj[key]
    }
  })
  return temp
}
