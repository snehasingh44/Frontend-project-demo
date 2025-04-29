import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

export default function App() {
  const [currentTab, setCurrentTab] = useState('add');
  const [notes, setNotes] = useState([]);

  const handleAdd = (updatedNotes) => {
    setNotes(updatedNotes);
    setCurrentTab('view');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentTab={currentTab} onChange={setCurrentTab} />
      {currentTab === 'add' && <AddNote onAdd={handleAdd} />}
      {currentTab === 'view' && <NotesList />}
    </div>
  );
}
