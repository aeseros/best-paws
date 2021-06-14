const User = require('./User');
// const Topic = require('./Topic');
const Post = require('./Post');
const Comment = require('./Comment');

// define sequelize relationship
// getting this to create tables
// next is to create seeds database with fake users and post/comment/topics
Post.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Post.belongsTo(Topic,{
//     foreignKey: 'topicId',
// });

Post.hasMany(Comment,{
    foreignKey: 'postId',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Topic.hasMany(Post,{
//     foreignKey: 'topicId',
//     onDelete: 'CASCADE', // always stays the same, dropdown menu to create post from
// });

module.exports = {User, Post, Comment}