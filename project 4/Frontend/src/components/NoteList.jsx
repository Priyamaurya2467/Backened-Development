import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, refresh }) {
  return (
    <div>
      <h2>Your Notes</h2>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} refresh={refresh} />
      ))}
    </div>
  );
}

export default NoteList;