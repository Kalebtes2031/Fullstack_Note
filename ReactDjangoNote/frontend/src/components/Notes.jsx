import React from 'react';
import Note from './Note';

const Notes = ({ notes, handleDelete }) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Notes;
