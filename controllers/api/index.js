const router = require('express').Router();

const userRoutes = require('./userRoutes');
const forumRoutes = require('./forumRoutes');
const topicRoutes = require('./topicRoutes');
const postsRoutes = require('./postsRoutes');
const commentsRoutes = require('./comments-routes');


// router.use('/users', userRoutes);
// router.use('/forum', forumRoutes);
// router.use('/topic', topicRoutes);
// router.user('/posts', postsRoutes);
// router.user('/comments', commentsRoutes);

module.exports = router;
