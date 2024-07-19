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

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
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