/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mockdata', {
    level: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    source: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    eventID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    taskCategory: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'mockdata'
  });
};
