import path from 'path'
import os from 'os'

const networkInterfaces = os.networkInterfaces()

const CONSTANT = {
  port: 3001,
  ip: networkInterfaces.WLAN[1].address,
  DEFAULT_PICTURE: 'https://dwz.cn/rnTnftZs',

  CRYPTO_SECRET_KEY: 'alksjdflaks2',
  SESSION_SECRET_KEY: ['aljfalksjdfalks'],

  FILE_MAX_SIZE: 1024 * 1024, // 1m

  PUBLIC_PATH: `${path.resolve()}/src/public`,
  DIST_FOLDER_PATH: path.join(path.resolve(), 'uploadFiles'),

  PAGE_SIZE: 10,
}

export { CONSTANT }
