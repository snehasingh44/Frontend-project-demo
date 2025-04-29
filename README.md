# Custom Note Service (No Backend)

## Setup & Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

## Why? Decisions

- **Storage Strategy:** Used `localStorage` with key `custom-note-service-notes` for simple client-side persistence without backend complexity.
- **Component Design:** Separated concerns into `AddNote`, `NotesList`, and `Navigation` for clarity and reusability.
- **State Management:** Used React `useState` for local component state and simple parent-child communication.
- **Styling:** Used Tailwind CSS for rapid utility-first styling and consistent design.
- **Navigation:** Simple button-based tab navigation to avoid routing complexity and keep UI minimal.

## Features

- Add notes with title and content.
- View list of notes with title and content snippet.
- Error handling and loading indicators for storage operations.
