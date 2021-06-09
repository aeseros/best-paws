const router = require('express').Router();
const forumRoutes = require('./forum-routes');
const commentsRoutes = require('./comments-routes');
const postsRoutes = require('./posts-routes');
const topicRoutes = require('./topic-routes');
const userRoutes = require('./user-routes');

router.use('/forum', forumRoutes);
router.use('/comments', commentsRoutes);
router.use('/posts', postsRoutes);
router.use('/topics', topicRoutes);
router.use('/users', userRoutes);

module.exports = router;