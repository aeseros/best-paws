const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const topicRoutes = require('./topicRoutes');
// const postsRoutes = require('./postsRoutes');
// const commentsRoutes = require('./comments-routes');

// localhost/api/users
router.use('/users', userRoutes);
// router.use('/topic', topicRoutes);
// router.use('/posts', postsRoutes);
// router.use('/comments', commentsRoutes);

module.exports = router;
