import React from "react";

const API = "http://localhost:5000/notes";

function NoteItem({ note, refresh }) {
  const deleteNote = async () => {
    await fetch(`${API}/${note._id}`, {
      method: "DELETE"
    });
    refresh();
  };

    const tagsArray = Array.isArray(note.tags)
    ? note.tags
    : typeof note.tags === "string"
      ? note.tags.split(",").map(tag => tag.trim())
      : [];

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="tags">
        {tagsArray.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default NoteItem;