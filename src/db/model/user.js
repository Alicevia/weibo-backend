import { DataTypes } from 'sequelize'
import sequlize from '../sequlize.js'

const UserModel = sequlize.define('user', {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名-不重复',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码',
  },
  nickName: {
    type: DataTypes.STRING,
    comment: '昵称',
    allowNull: false,
  },
  gender: {
    type: DataTypes.DECIMAL,
    comment: '性别',
    allowNull: false,
    comment: '性别 1男性 2女性 3保密',
    defaultValue: 3,
  },
  picture: {
    type: DataTypes.STRING,
    comment: '头像url地址',
  },
  city: {
    type: DataTypes.STRING,
    comment: '城市',
  },
})

export { UserModel }
