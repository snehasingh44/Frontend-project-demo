import React from 'react';

export default function Navigation({ currentTab, onChange }) {
  // Why this nav approach for simplicity: Simple buttons allow easy tab switching without routing complexity.
  return (
    <nav className="flex justify-center space-x-4 p-4 bg-gray-100 border-b border-gray-300">
      <button
        className={`px-4 py-2 rounded ${currentTab === 'add' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
        onClick={() => onChange('add')}
      >
        Add Note
      </button>
      <button
        className={`px-4 py-2 rounded ${currentTab === 'view' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
        onClick={() => onChange('view')}
      >
        View Notes
      </button>
    </nav>
  );
}
