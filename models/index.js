'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class index extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  index.init({
    idtestLogs: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    date: DataTypes.STRING,
    source: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    taskCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'index',
  });
  return index;
};