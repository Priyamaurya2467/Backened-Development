import React from "react";

const API = "http://localhost:5000/api/notes";

function NoteItem({ note, refresh }) {
  const deleteNote = async () => {
    await fetch(`${API}/${note._id}`, {
      method: "DELETE"
    });
    refresh();
  };

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="tags">
        {note.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default NoteItem;