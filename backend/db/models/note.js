'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    notebookId: DataTypes.INTEGER
  }, {});
  Note.associate = function (models) {
    // associations can be defined here
    Note.belongsTo(models.User, { foreignKey: "userId" })
    Note.belongsTo(models.Notebook, { foreignKey: "notebookId" })
    const columnMapping = {
      through: "joinnotewithtag",
      otherKey: "tagId",
      foreignKey: "noteId"
    }
    Note.belongsToMany(models.JoinNoteWithTag, columnMapping)
  };
  return Note;
};
