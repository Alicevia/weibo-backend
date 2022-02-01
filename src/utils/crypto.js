import crypto from 'crypto'
import { CONSTANT } from '../config/constant.js'

function mdFive(content) {
  const md5 = crypto.createHash('md5')
  return md5.update(content).digest('hex')
}

export function doCrypto(content) {
  const str = `password=${content}&key=${CONSTANT.CRYPTO_SECRET_KEY}`
  return mdFive(str)
}
