// delete this later. make sure it doesn't cause any problems
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Topic extends Model {}

Topic.init(
  {
    // define columns
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    topic_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }, // do we want to restrict topic names in front end
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic',
  }
);

module.exports = Topic;