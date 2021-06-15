const router = require('express').Router();
const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');

// api/posts
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(
            req.body,
            req.title
            // , user_id: req.session.user_id
            );
        console.log(post);

        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
});

module.exports = router;

