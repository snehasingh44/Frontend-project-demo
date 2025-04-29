import React, { useState } from 'react';
import { getNotes, saveNotes } from '../utils/storage';

export default function AddNote({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // Why I chose useState + this submit handler: useState provides simple local state for controlled inputs and saving state, submit handler manages storage update and parent notification.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const existingNotes = getNotes();
      const newNote = { id: Date.now(), title, content };
      const updatedNotes = [newNote, ...existingNotes];
      saveNotes(updatedNotes);
      onAdd(updatedNotes);
      setTitle('');
      setContent('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {error && (
        <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
          Error saving note: {error} {/* // Why display error banner: To inform user of storage issues */}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1" htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={saving}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="content">Content</label>
          <textarea
            id="content"
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={saving}
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Add Note'} {/* // Why show spinner here: To indicate saving in progress */}
        </button>
      </form>
    </div>
  );
}
