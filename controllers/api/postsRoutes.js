const router = require('express').Router();
const { Post } = require('../../models');
// const withAuth = require('../../utils/auth');

// api/posts
// router.post('/', async (req, res) => {
//     try {
//         const post = await Post.create(
//             req.body.title,
//             req.title
//             // , user_id: req.session.user_id
//             ).then(dbPostData => res.json(dbPostData))
//         console.log(post);

//         res.status(200).json(post);
//     } catch (error) {
//         console.log(error)
//         res.status(400).json(error);
//     }
// });

// module.exports = router;

// api/posts
// router.post('/', (req, res) => {
//     Post.create({
//         title: req.body.title,
//         body: req.body.body
//         })
//         .then(dbPostData => res.json(dbPostData))
//         .catch (error)
//             console.log(error)
//             res.status(400).json(error);
//         // req.body,
//         // req.title
//         // , user_id: req.session.user_id
        
//     // console.log(post);
//     // res.status(200).json(post);
// });

router.post('/', async (req, res) => { 
    try { 
        const newPost = await Post.create({ ...
            req.body}); 
            res.status(200).json(newPost); 
        } 
    catch (err) { 
        res.status(400).json(err); 
    }});

module.exports = router;

