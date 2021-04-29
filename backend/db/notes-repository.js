const { Note } = require("./models");

async function notesByUserId(userId) {
  return await Note.findAll({
    where: {
      userId
    }
  })
}

async function addNote(noteDetails, id) {
  const note = await Note.create({
    ...noteDetails,
    id
  })
  return await Note.findByPk(note.id)
}

module.exports = {
  notesByUserId,
  addNote
}
