const env = process.env.NODE_ENV

const ENV = {
  isDEV: env === 'dev',
  isTest: env === 'test',
  isProd: env === 'production',
}
export default ENV
