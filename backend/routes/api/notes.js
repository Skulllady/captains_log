const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { content } = require('../../db/models/note')
const { requireAuth } = require("../../utils/auth")


const NotesRepository = require("../../db/notes-repository");

router.get('/', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  const listAllNotes = await NotesRepository.notesByUserId(userId);
  return res.json(listAllNotes);
}))

router.post('/', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  const note = await NotesRepository.addNote(req.body, userId);
  return res.json(note);
}))

router.get('/search', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  const query = req.query.query;
  const listAllNotes = await NotesRepository.searchNotesByUserId(query, userId);
  return res.json(listAllNotes);
}))

router.put('/:id', requireAuth, asyncHandler(async function (req, res) {
  //get user id and ensure the note is owned by person editing note
  const userId = req.user.id;
  //find out if note belongs to user
  const note = await NotesRepository.findNote(req.body.id, userId);
  if (note) {
    await NotesRepository.editNote(note, req.body);
    return res.json(note)
  }
  //TODO else {
  // console.log("TODO: ERROR 404, Note not found")
  // }
}))

module.exports = router;
