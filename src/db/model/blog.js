import { DataTypes } from 'sequelize'
import sequlize from '../sequlize.js'

const BlogModel = sequlize.define('blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

export { BlogModel }
