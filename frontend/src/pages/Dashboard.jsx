import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import { useAuth } from '../hooks/useAuth';
import { encryptNote, decryptNote, importKey, hasE2EKey } from '../utils/webcrypto';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const queryClient = useQueryClient();
    const [newNote, setNewNote] = useState('');
    const [decryptedNotes, setDecryptedNotes] = useState([]);
    const [isDecrypting, setIsDecrypting] = useState(false);

    // Make sure we have the key loaded into memory
    useEffect(() => {
        const loadKey = async () => {
            if (!hasE2EKey()) {
                const storedKey = sessionStorage.getItem('e2e_key');
                if (storedKey) {
                    await importKey(storedKey);
                }
            }
        };
        loadKey();
    }, []);

    const { data: notes, isLoading: isLoadingNotes } = useQuery({
        queryKey: ['notes'],
        queryFn: async () => {
            const { data } = await api.get('/notes');
            return data;
        }
    });

    // Decrypt notes when they arrive
    useEffect(() => {
        const decryptAll = async () => {
            if (!notes || !hasE2EKey()) return;
            setIsDecrypting(true);
            try {
                const decrypted = await Promise.all(
                    notes.map(async (note) => {
                        if (note.error) return { ...note, text: '[Corrupted Data]' };
                        try {
                            const text = await decryptNote(note.encryptedContent);
                            return { ...note, text };
                        } catch (e) {
                            return { ...note, text: '[Decryption Failed]' };
                        }
                    })
                );
                setDecryptedNotes(decrypted);
            } finally {
                setIsDecrypting(false);
            }
        };
        decryptAll();
    }, [notes]);

    const createNoteMutation = useMutation({
        mutationFn: async (encryptedPayload) => {
            await api.post('/notes', { encryptedContent: encryptedPayload });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
            setNewNote('');
        }
    });

    const deleteNoteMutation = useMutation({
        mutationFn: async (id) => {
            await api.delete(`/notes/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        }
    });

    const handleCreateNote = async (e) => {
        e.preventDefault();
        if (!newNote.trim()) return;

        try {
            // E2EE: Encrypt in browser before sending to server
            const encryptedPayload = await encryptNote(newNote);
            await createNoteMutation.mutateAsync(encryptedPayload);
        } catch (error) {
            console.error('Failed to encrypt/send note', error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100">
            {/* Header */}
            <header className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-emerald-400 tracking-tight">SecureVault</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-400">Agent: {user?.email}</span>
                        <button
                            onClick={() => logout()}
                            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            Lock Vault
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-10">
                {/* Compose Area */}
                <div className="mb-12 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform scale-y-0 group-focus-within:scale-y-100 transition-transform origin-top"></div>
                    <form onSubmit={handleCreateNote}>
                        <textarea
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder="Write a highly classified note..."
                            className="w-full h-32 bg-transparent border-none resize-none focus:ring-0 text-slate-200 placeholder-slate-500 outline-none"
                            required
                        ></textarea>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-xs text-slate-500 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                E2E Encryption Active
                            </div>
                            <button
                                type="submit"
                                disabled={createNoteMutation.isPending || !newNote.trim()}
                                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {createNoteMutation.isPending ? 'Encrypting...' : 'Encrypt & Save'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Notes Grid */}
                <h2 className="text-lg font-semibold text-slate-300 mb-6 border-b border-slate-700/50 pb-2">Your Classified Briefs</h2>
                
                {isLoadingNotes || isDecrypting ? (
                    <div className="flex justify-center py-20">
                        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : decryptedNotes.length === 0 ? (
                    <div className="text-center py-20 border border-dashed border-slate-700 rounded-2xl bg-slate-800/10">
                        <p className="text-slate-500">Vault is empty.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {decryptedNotes.map((note) => (
                            <div key={note.id} className="group bg-slate-800/40 border border-slate-700 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-emerald-500/5 relative">
                                <p className="text-slate-200 whitespace-pre-wrap mb-6">{note.text}</p>
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <span className="text-xs text-slate-500">
                                        {new Date(note.createdAt).toLocaleDateString()}
                                    </span>
                                    <button
                                        onClick={() => deleteNoteMutation.mutate(note.id)}
                                        disabled={deleteNoteMutation.isPending}
                                        className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                        title="Destroy record"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Dashboard;
