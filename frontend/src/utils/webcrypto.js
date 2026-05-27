// The encryption key used by the frontend for End-to-End Encryption (E2EE).
// In a real-world app, this might be derived from a user's vault password using PBKDF2
// For this interview exercise, we will generate or store a key locally in memory.
let e2eKey = null;

/**
 * Generates a new AES-GCM key for End-to-End Encryption.
 * Extracted as exportable so it can be saved/loaded by the user.
 */
export const generateE2EKey = async () => {
    const key = await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256
        },
        true, // exportable
        ["encrypt", "decrypt"]
    );
    e2eKey = key;
    return key;
};

/**
 * Exports the key as a base64 string so it can be saved (e.g., as a recovery code).
 */
export const exportKey = async (key) => {
    const exported = await window.crypto.subtle.exportKey("raw", key);
    return btoa(String.fromCharCode(...new Uint8Array(exported)));
};

/**
 * Imports a base64 string back into a CryptoKey.
 */
export const importKey = async (base64Key) => {
    const binary = atob(base64Key);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    const key = await window.crypto.subtle.importKey(
        "raw",
        bytes.buffer,
        "AES-GCM",
        true,
        ["encrypt", "decrypt"]
    );
    e2eKey = key;
    return key;
};

// Set the current key (called during login/setup)
export const setE2EKey = (key) => {
    e2eKey = key;
};
export const hasE2EKey = () => e2eKey !== null;

/**
 * Encrypts a plaintext note using AES-GCM.
 * This happens entirely in the browser. The server never sees the plaintext.
 * 
 * @param {string} text - The plaintext note
 * @returns {Promise<string>} - A base64 string containing both the IV and the Ciphertext
 */
export const encryptNote = async (text) => {
    if (!e2eKey) throw new Error("E2EE Key is not set");

    // 1. Convert text to ArrayBuffer
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(text);

    // 2. Generate a 12-byte IV (96 bits) for AES-GCM
    // IMPORTANT: Never reuse an IV with the same key
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    // 3. Encrypt the data
    const ciphertextBuffer = await window.crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv
        },
        e2eKey,
        encodedText
    );

    // 4. Combine IV and Ciphertext into a single payload so the backend can store it
    // The AuthTag is automatically appended to the ciphertext in WebCrypto AES-GCM
    const ciphertext = new Uint8Array(ciphertextBuffer);
    const combined = new Uint8Array(iv.length + ciphertext.length);
    combined.set(iv, 0);
    combined.set(ciphertext, iv.length);

    // 5. Convert to Base64 for easy transport/storage
    return btoa(String.fromCharCode(...combined));
};

/**
 * Decrypts a base64 encrypted note.
 * 
 * @param {string} base64Payload - The combined IV + Ciphertext payload
 * @returns {Promise<string>} - The decrypted plaintext
 */
export const decryptNote = async (base64Payload) => {
    if (!e2eKey) throw new Error("E2EE Key is not set");

    // 1. Decode base64 to binary
    const binaryStr = atob(base64Payload);
    const combined = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
        combined[i] = binaryStr.charCodeAt(i);
    }

    // 2. Extract IV (first 12 bytes) and Ciphertext (the rest)
    const iv = combined.slice(0, 12);
    const ciphertext = combined.slice(12);

    // 3. Decrypt
    try {
        const decryptedBuffer = await window.crypto.subtle.decrypt(
            {
                name: "AES-GCM",
                iv: iv
            },
            e2eKey,
            ciphertext
        );

        // 4. Decode to text
        const decoder = new TextDecoder();
        return decoder.decode(decryptedBuffer);
    } catch (err) {
        console.error("Decryption failed. This means either the key is wrong, or the data was tampered with.");
        throw new Error("Decryption failed");
    }
};
