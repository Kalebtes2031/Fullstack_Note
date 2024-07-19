import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import api from '../api';
import Navbar from '../components/Navbar';

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const addNote = (title, content) => {
    api
      .post("/api/notes/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!");
          navigate('/');
        } else {
          alert("Failed to create note.");
        }
      })
      .catch((err) => alert(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <>
      <Navbar />
      <div className="bg-indigo-200 min-h-screen pt-16"> {/* Full screen height with padding for navbar */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white mt-8 rounded-lg shadow-xl w-11/12 max-w-lg mx-auto">
            <form onSubmit={onSubmit}>
              <div className="border-b bg-gray-200 rounded-t-lg px-4 py-2 flex justify-between items-center">
                <h3 className="text-lg font-medium">Note</h3>
                {/* <button onClick={() => navigate('/')} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button> */}
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                  <textarea
                    rows="9"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
                  />
                </div>
              </div>
              <div className="border-t px-4 py-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 mr-2"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
