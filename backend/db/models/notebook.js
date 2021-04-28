'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    name: DataTypes.STRING,
    notebookcover: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Notebook.associate = function (models) {
    // associations can be defined here
    Notebook.hasMany(models.Note)
    Notebook.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Notebook;
};
