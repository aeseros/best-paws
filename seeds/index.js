const seedTopic = require('./topic-seeds');
const seedUser = require('./user-seeds');
const seedPost = require('./post-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
        console.log('\n DATABASE SYNCED \n');

    await seedUser();
        console.log('\n DATABASE SYNCED \n');
    
    await seedPost();
        console.log('\n DATABASE SYNCED \n');

    await seedComment();
        console.log('\n DATABASE SYNCED \n');

    process.exit(0);
}

seedAll();
