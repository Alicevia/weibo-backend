import { Sequelize } from 'sequelize'
import { MYSQL_CONF } from '../config/mysqlConfig.js'

const { user, host, password, database, dialect } = MYSQL_CONF
const sequlize = new Sequelize(database, user, password, {
  host,
  dialect,
})

export default sequlize
