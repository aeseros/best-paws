const topicsSeeds = require('./topicsSeeds');
const postsSeeds = require('./postSeeds');

const seedTable = async function() {
    await topicsSeeds();
    await postsSeeds();
};

seedTable();
