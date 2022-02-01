import { BlogModel } from './blog.js'
import { UserModel } from './user.js'

// blogModel 下的userId属于userModel的id
BlogModel.belongsTo(UserModel, {
  foreignKey: 'userId',
})
UserModel.hasMany(BlogModel, {
  foreignKey: 'userId',
})

export { UserModel, BlogModel }
