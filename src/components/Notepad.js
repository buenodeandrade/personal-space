import React, { useState } from 'react';

function Notepad() {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const saveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote('');
  };

  const removeNote = (index) => {
    setSavedNotes(savedNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="notepad">
      <h3>Notes</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        rows="5"
        cols="30"
      />
      <button onClick={saveNote}>Save Note</button>
      <ul>
        {savedNotes.map((n, index) => (
          <li key={index}>{n}<button class="delete" onClick={() => removeNote(index)}>✗</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Notepad;
