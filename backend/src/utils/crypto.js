const crypto = require('crypto');

// The algorithm used for server-side encryption
const ALGORITHM = 'aes-256-gcm';

// Load the master key from environment variables and convert from hex to Buffer
// AES-256 requires a 32-byte key. A 64-character hex string is exactly 32 bytes.
const getMasterKey = () => {
    const key = process.env.SERVER_MASTER_KEY;
    if (!key || key.length !== 64) {
        throw new Error('SERVER_MASTER_KEY is not set or is not 64 hex characters long');
    }
    return Buffer.from(key, 'hex');
};

/**
 * Encrypts data using AES-256-GCM.
 * This is the Server-Side Encryption (SSE) layer, protecting data at rest.
 * 
 * @param {string} text - The plaintext (or frontend-encrypted ciphertext) to encrypt
 * @returns {Object} - Contains encryptedData, iv, and authTag (all as hex strings)
 */
const encrypt = (text) => {
    // Generate a unique 12-byte (96-bit) Initialization Vector for GCM
    // NEVER reuse an IV with the same key in GCM mode!
    const iv = crypto.randomBytes(12);
    const key = getMasterKey();

    // Create the cipher instance
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

    // Encrypt the text
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    // Get the Authentication Tag to ensure data integrity
    const authTag = cipher.getAuthTag();

    return {
        encryptedContent: encrypted,
        iv: iv.toString('hex'),
        authTag: authTag.toString('hex')
    };
};

/**
 * Decrypts data using AES-256-GCM.
 * 
 * @param {string} encryptedText - The encrypted data (hex string)
 * @param {string} ivHex - The Initialization Vector used during encryption (hex string)
 * @param {string} authTagHex - The Authentication Tag (hex string)
 * @returns {string} - The decrypted text
 */
const decrypt = (encryptedText, ivHex, authTagHex) => {
    const key = getMasterKey();
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');

    // Create decipher instance
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    
    // Set the AuthTag for integrity verification
    decipher.setAuthTag(authTag);

    // Decrypt the text
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
};

module.exports = {
    encrypt,
    decrypt
};
