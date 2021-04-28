'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    notebookid: DataTypes.INTEGER
  }, {});
  Note.associate = function (models) {
    // associations can be defined here
    const columnMapping = {
      through: "joinnotewithtag",
      otherKey: "tagId",
      foreignKey: "noteId"
    }
    Note.belongsToMany(models.JoinNoteWithTag, columnMapping)
    Note.belongsTo(models.User)
    Note.belongsTo(models.Notebook)
  };
  return Note;
};
