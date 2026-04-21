import React, { useState } from "react";

const API = "http://localhost:5000/notes";

function NoteForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async () => {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        tags: tags.split(","),
      }),
    });

    setTitle("");
    setContent("");
    setTags("");
    refresh();
  };

  return (
    <div className="card">
      <h2>Add New Note</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        placeholder="Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Note</button>
    </div>
  );
}

export default NoteForm;