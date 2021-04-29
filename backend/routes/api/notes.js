const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { content } = require('../../db/models/note')
const { requireAuth } = require("../../utils/auth")


const NotesRepository = require("../../db/notes-repository")

router.get('/', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  const listAllNotes = await NotesRepository.notesByUserId(userId);
  return res.json(listAllNotes);
}))

router.post('/', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  console.log("req.BODY", req.body)
  const note = await NotesRepository.addNote(req.body, userId);
  return res.json(note);
}))

module.exports = router;
