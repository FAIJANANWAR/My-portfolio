const Note = require('../models/Note.model');
const { encrypt, decrypt } = require('../../utils/crypto');

// Create a new note
const createNote = async (req, res, next) => {
    try {
        const { encryptedContent } = req.body;
        
        if (!encryptedContent) {
            return res.status(400).json({ message: 'Note content is required' });
        }

        // 1. Receive the E2EE (browser-encrypted) content
        // 2. Encrypt it AGAIN using Server-Side Encryption (SSE)
        const { encryptedContent: doubleEncrypted, iv, authTag } = encrypt(encryptedContent);

        // 3. Save to database. Notice we attach req.user.id to guarantee user isolation (IDOR protection)
        const note = await Note.create({
            userId: req.user.id,
            encryptedContent: doubleEncrypted,
            iv,
            authTag
        });

        res.status(201).json({
            message: 'Note created successfully',
            note: {
                id: note._id,
                createdAt: note.createdAt,
                // Do NOT send back the double encrypted content unless needed.
                // Normally frontend wants to see it added to the list, we can send back
                // the original E2EE content they sent us, or just success.
                encryptedContent
            }
        });
    } catch (error) {
        next(error);
    }
};

// Get all notes for the authenticated user
const getNotes = async (req, res, next) => {
    try {
        // Enforce user isolation: Only fetch notes belonging to the authenticated user
        const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });

        // Decrypt the server-side encryption before sending to frontend
        const decryptedNotes = notes.map(note => {
            try {
                // Decrypt the SSE layer, resulting in the E2EE ciphertext
                const e2eeCiphertext = decrypt(note.encryptedContent, note.iv, note.authTag);
                
                return {
                    id: note._id,
                    createdAt: note.createdAt,
                    encryptedContent: e2eeCiphertext // Frontend will decrypt this layer!
                };
            } catch (err) {
                console.error(`Failed to decrypt note ${note._id}:`, err.message);
                // If a note fails authentication tag validation (tampered!), skip or mark it
                return { id: note._id, error: 'Data integrity compromised' };
            }
        });

        res.status(200).json(decryptedNotes);
    } catch (error) {
        next(error);
    }
};

// Delete a note
const deleteNote = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Security check: Must ensure the note exists AND belongs to the user
        const note = await Note.findOneAndDelete({ _id: id, userId: req.user.id });

        if (!note) {
            // Either it doesn't exist, or it belongs to someone else (preventing IDOR)
            return res.status(404).json({ message: 'Note not found or unauthorized' });
        }

        res.status(200).json({ message: 'Note deleted successfully', id });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createNote,
    getNotes,
    deleteNote
};
