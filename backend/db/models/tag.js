'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING(50)
  }, {});
  Tag.associate = function (models) {
    const columnMapping = {
      through: "joinnotewithtag",
      otherKey: "noteId",
      foreignKey: "tagId"
    }
    Tag.belongsToMany(models.JoinNoteWithTag, columnMapping)
  };
  return Tag;
};
