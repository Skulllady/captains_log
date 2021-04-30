const { Note, sequelize } = require("./models");
const { QueryTypes } = require('sequelize');


async function notesByUserId(userId) {
  return await Note.findAll({
    where: {
      userId
    }
  })
}

async function addNote(noteDetails, userId) {
  return await Note.create({
    ...noteDetails,
    userId
  })
}

async function searchNotesByUserId(inputQuery, userId) {
  return await sequelize.query(`
    SELECT * FROM "${Note.tableName}"
    WHERE to_tsvector(title || ' ' || content) @@ plainto_tsquery('english', :query)
    AND "userId" = :userId`,
    {
      model: Note,
      replacements: { query: inputQuery, userId: userId },
      type: QueryTypes.SELECT
    }
  );
}

module.exports = {
  notesByUserId,
  addNote,
  searchNotesByUserId
}
