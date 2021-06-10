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

router.get('/gallery', async (req, res) => {
  try {
    // do something
    console.log(`gallery route accessed ...`);
    res.render('gallery');

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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

module.exports = router;