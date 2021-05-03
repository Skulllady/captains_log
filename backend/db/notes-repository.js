const { Note, sequelize } = require("./models");
const { QueryTypes } = require('sequelize');


async function notesByUserId(userId) {
  return await Note.findAll({
    where: {
      userId
    },
    order: [['updatedAt', 'DESC']]
  })
}

async function addNote(noteData, userId) {
  return await Note.create({
    ...noteData,
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

async function findNote(noteId, userId) {
  return await Note.findOne({
    where: {
      id: noteId,
      userId
    }
  })
}

async function editNote(note, noteData) {
  note.title = noteData.title
  note.content = noteData.content
  note.img = noteData.img
  note.notebookId = noteData.notebookId
  return await note.save()
}

module.exports = {
  notesByUserId,
  addNote,
  searchNotesByUserId,
  findNote,
  editNote
}
