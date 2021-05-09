const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const { content } = require('../../db/models/notebook')
const { requireAuth } = require("../../utils/auth")


const NotebooksRepository = require("../../db/notebooks-repository");

router.post('/', requireAuth, asyncHandler(async function (req, res) {
  const userId = req.user.id;
  const notebook = await NotebooksRepository.addNotebook(req.body, userId);
  return res.json(notebook);
}))
