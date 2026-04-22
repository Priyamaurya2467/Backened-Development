import React from "react";
import NoteItem from "./NoteItem";
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";


function NoteList({ refresh }) {
  const [notes,setnotes] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/notes")
    .then((res)=>{
      console.log(res.data)
      setnotes(res.data.notes || res.data)
    })
    .catch(err => console.log(err));

  },[refresh])

  return (
    <div>
      <h2>Your Notes</h2>
      {Array.isArray(notes) &&
      notes.map((note) => (
        <NoteItem key={note._id} note={note} refresh={refresh} />
      ))}
    </div>
  );
}

export default NoteList;