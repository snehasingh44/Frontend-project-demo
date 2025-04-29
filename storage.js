// Utility to read/write notes to localStorage with error handling

const STORAGE_KEY = 'custom-note-service-notes';

export function getNotes() {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error reading notes from localStorage', error);
    throw new Error('Failed to read notes from storage');
  }
}

export function saveNotes(notes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes to localStorage', error);
    throw new Error('Failed to save notes to storage');
  }
}
