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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.post('/login', async (req, res) => {
    console.log(' login from userRoutes');
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({message: 'Incorrect email or password, please try again!'});
            return;
        }

        const validPawword = await User.checkPassword(req.body.password);

        if (!validPawword) {
            res
                .status(400)
                .json({message: 'Incorrect email or password, please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
