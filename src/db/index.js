import sequlize from './sequlize.js'
import './model/index.js'

export default function dbInit() {
  sequlize
    .authenticate()
    .then(() => {
      console.log(`成功ok`)
      // sequlize.sync({ force: true })
    })
    .catch((err) => {
      console.log(`连接失败${err}`)
    })
}
