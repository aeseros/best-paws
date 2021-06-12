const router = require('express').Router();

// Get homepage
router.get('/', async (req, res) => {
  try {
    // do something
    res.render('home');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Accounts route
router.get('/account', async (req, res) => {
  try {
    // do something
    console.log(`account route accessed ...`);
    res.render('account');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Forum route
router.get('/forum', async (req, res) => {
  try {
    // do something
    console.log(`forum route accessed ...`);
    res.render('forum');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Contact route
router.get('/contact', async (req, res) => {
  try {
    // do something
    console.log(`contact route accessed ...`);
    res.render('contact');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/account');
      return;
    }

    res.render('login');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Signup route
router.get('/signup', async (req, res) => {
  try {
    // do something
    console.log(`signup route accessed ...`);
    res.render('signup');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;