import React, { useEffect, useState } from "react";
import NoteForm from "./Pages/NoteForm";
import NoteList from "./Pages/NoteList";
import SearchBar from "./Pages/SearchBar";
import "./App.css";

const API = "http://localhost:5000/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNotes = async () => {
    let url = API;
    if (search) url += `?search=${search}`;

    const res = await fetch(url);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, [search]);

  return (
    <div className="container">
      <h1>📚 Notes App</h1>

      <NoteForm refresh={fetchNotes} />
      <SearchBar setSearch={setSearch} />
      <NoteList notes={notes} refresh={fetchNotes} />
    </div>
  );
}

export default App;