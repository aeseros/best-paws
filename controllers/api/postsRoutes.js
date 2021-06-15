const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// api/posts
router.post('/', withAuth, async (req, res) => {
    try {
        const post = await Post.create(req.body);
        console.log(post);

        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
});


