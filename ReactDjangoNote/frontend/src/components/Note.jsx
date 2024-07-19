// import React from "react";

// function Note({ note, onDelete }) {
//   // Assuming note.created_at is in ISO format, e.g., "2023-03-14T15:09:03.000Z"
//   const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

//   return (
//     <div className="p-4 my-5 border border-gray-300 rounded-md">
//   <p className="text-gray-800">{note.title}</p>
//   <p className="text-gray-600">{note.content}</p>
//   <p className="text-gray-500 text-sm">{formattedDate}</p>
//   <button
//     className="bg-red-500 text-white border-none py-2 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:bg-red-600"
//     onClick={() => onDelete(note.id)}
//   >
//     Delete
//   </button>
// </div>

//   );
// }

// export default Note;
import React from 'react';
import { FaWindowClose } from 'react-icons/fa';

const Note = ({ note, handleDelete }) => {
  return (
    <div className="w-full px-2 mt-4 mb-4 flex">
      <div className="bg-white rounded-lg shadow-md flex flex-col h-full relative">
        <div className="text-black text-bold bg-slate-400 py-2 px-4 rounded-t-lg">{note.title}</div>
        <div className="text-gray-700 p-4 flex-grow overflow-y-auto" style={{ maxHeight: '200px' }}>
          {note.content}
        </div>
        <div className="rounded-b-lg bg-slate-200 shadow-2xl px-4 py-2 mt-auto flex justify-end items-center">
          <div className="flex-grow"></div>
          <div className="cursor-pointer">
            <FaWindowClose
              className="text-red-500"
              size={20}
              onClick={() => handleDelete(note.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
