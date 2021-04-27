'use strict';
module.exports = (sequelize, DataTypes) => {
  const JoinNoteWithTag = sequelize.define('JoinNoteWithTag', {
    noteId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  JoinNoteWithTag.associate = function(models) {
    // associations can be defined here
  };
  return JoinNoteWithTag;
};