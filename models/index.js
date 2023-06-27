const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//one (user) to many (posts)
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//one (post) to many (comments)
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

//one (user) to many (comments)
User.hasMany(Comment,{
  foreignKey: 'user_id'
});

Comment.belongsTo(User,{
  foreignKey: 'user_id'
});

//export models
module.exports = { User, Post, Comment };
