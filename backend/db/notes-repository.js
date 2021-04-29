const { Note } = require("./models");


async function notesByUserId(userId) {
  return await Note.findAll({
    where: {
      userId
    }
  })
}

async function addNote(noteDetails, userId) {
  const note = await Note.create({
    ...noteDetails,
    userId
  })
  return note;
}

module.exports = {
  notesByUserId,
  addNote
}
