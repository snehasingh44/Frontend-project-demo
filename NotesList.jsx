import React, { useEffect, useState } from 'react';
import { getNotes } from '../utils/storage';

export default function NotesList() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  // Why useEffect to sync storage → state: To load notes from localStorage on component mount and update UI accordingly.
  useEffect(() => {
    try {
      const storedNotes = getNotes();
      setNotes(storedNotes);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  if (error) {
    return (
      <div className="bg-red-200 text-red-800 p-2 rounded max-w-md mx-auto">
        Error loading notes: {error} {/* // Why display error banner: To inform user of storage read issues */}
      </div>
    );
  }

  if (notes.length === 0) {
    return <p className="max-w-md mx-auto p-4 text-center text-gray-600">No notes available.</p>;
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      {notes.map(({ id, title, content }) => (
        <div key={id} className="border border-gray-300 rounded p-3 shadow-sm">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-gray-700">{content.length > 100 ? content.slice(0, 100) + '...' : content}</p>
        </div>
      ))}
    </div>
  );
}
