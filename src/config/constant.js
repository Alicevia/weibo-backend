import path from 'path'

const CONSTANT = {
  DEFAULT_PICTURE: 'https://dwz.cn/rnTnftZs',

  CRYPTO_SECRET_KEY: 'alksjdflaks2',
  SESSION_SECRET_KEY: ['aljfalksjdfalks'],

  FILE_MAX_SIZE: 1024 * 1024, // 1m

  PUBLIC_PATH: `${path.resolve()}/src/public`,
  DIST_FOLDER_PATH: path.join(path.resolve(), 'uploadFiles'),
}

export { CONSTANT }
