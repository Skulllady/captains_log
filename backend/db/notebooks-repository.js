const { Notebook, sequelize } = require("./models");
const { QueryTypes } = require('sequelize');

//createNotebook
async function createNotebook(notebookData, userId) {
  return await Notebook.create({
    ...notebookData,
    userId
  })
}

module.exports = {
  createNotebook
}
