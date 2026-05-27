const express = require('express');
const router = express.Router();
const { createNote, getNotes, deleteNote } = require('../controllers/notes.controller');
const { requireAuth } = require('../middleware/auth.middleware');

// All note routes require authentication
router.use(requireAuth);

router.post('/', createNote);
router.get('/', getNotes);
router.delete('/:id', deleteNote);

module.exports = router;
