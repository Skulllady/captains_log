const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { content } = require('../../db/models/note')

const NotesRepository = require("../../db/notes-repository")

router.get('/notes', asyncHandler(async function (req, res) {
  const userId = req.body.userId;
  const listAllNotes = await NotesRepository.notesByUserId(userId)
  return res.json(listAllNotes);
}))

router.post('/notes/new', asyncHandler(async function (req, res) {
  const note = await NotesRepository.addNote(req.body, req.params.id);
  return res.json(note);
}))

module.exports = router;
