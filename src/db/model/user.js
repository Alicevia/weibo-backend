import { DataTypes } from 'sequelize'
import sequlize from '../sequlize.js'

const UserModel = sequlize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickName: {
    type: DataTypes.STRING,
    comment: '昵称',
  },
})

export { UserModel }
