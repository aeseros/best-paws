const router = require('express').Router();
const { User } = require('../../models');

// create a new user
// /api/users
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;
        });

        res.status(200).json(user);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
});

module.exports = router;
