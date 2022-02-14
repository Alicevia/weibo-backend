import { DataTypes } from 'sequelize'
import sequlize from '../sequlize.js'

const BlogModel = sequlize.define('blog', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: '用户id',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '微博标题',
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: '微博内容',
  },
  image: {
    type: DataTypes.STRING,
    comment: '图片地址',
  },
})

export { BlogModel }
