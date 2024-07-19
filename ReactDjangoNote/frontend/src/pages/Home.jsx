import React, { useState, useEffect } from "react"
import api from "../api"
import Notes from "../components/Notes";
import Navbar from "../components/Navbar";


function Home(){

    const [notes, setNotes] = useState([]);
    // const [content, setContent] = useState("");
    // const [title, setTitle] = useState("");

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes()
            })
            .catch((err) => alert(err));
    }

    // const addNote = (title, content) => { // Updated parameters to accept title and content
    //     api
    //         .post("/api/notes/", { title, content }) // Send title and content in the request body
    //         .then((res) => {
    //             if (res.status === 201) {
    //                 alert("Note created!");
    //                 getNotes(); // Refresh notes after create
    //             } else {
    //                 alert("Failed to create note.");
    //             }
    //         })
    //         .catch((err) => alert(err));
    // };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
            {/* <div>
                <h2>Notes</h2>
                {notes.map((note) => <Note note={note} onDelete={deleteNote} key={note.id} />)}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote} className="p-10 max-w-md mx-auto mt-10 bg-white shadow-xl rounded-md">
                <label htmlFor="title" className="block text-md font-medium text-gray-700">Title:</label>
                <div className="mt-1">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                
                <div className="mt-5">
                    <label htmlFor="content" className="block text-md font-medium text-gray-700">Content:</label>
                    <div className="mt-1 mb-5">
                        <textarea
                            id="content"
                            name="content"
                            required
                            onChange={(e) => setContent(e.target.value)}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>   
                </div>

                <input 
                    type="submit"
                    value="Submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
                />
            </form> */}
           <Navbar />
            <div className="bg-indigo-200 min-h-screen pt-16"> {/* Full screen height with padding for navbar */}
                <div className="container mx-auto px-4 py-8">
                    <Notes notes={notes} handleDelete={deleteNote} />
                </div>
            </div>
        </>
    )
}

export default Home