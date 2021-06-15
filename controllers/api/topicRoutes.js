// render all topics on forum page
const router = require('express').Router();
// const { Model } = require('sequelize/types');
// for some reason not recognizing topic as class
const { Topic } = require('../../models/Topic');

// create and save a new topic
// /api/topic
router.post('/', async (req, res) => {
    try {
        const topic = await Topic.create(req.body);
        console.log(topic);

        res.status(200).json(topic);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
});

router.get('/', (req, res) => {

});

module.exports = router;
