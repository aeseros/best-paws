// Get homepage
router.get('/', async (req, res) => {
    try {
      // do something
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });