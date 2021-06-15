const sequelize = require('../config/connection');

const Topic = require('../models/Book');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedTopicTable = async () => {

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await Topic.bulkCreate(topicSeedData);

  process.exit(0);
};

module.exports = seedTopicTable;
