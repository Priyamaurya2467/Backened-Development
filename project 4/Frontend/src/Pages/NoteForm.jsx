import axios from "axios";
import React, { useState } from "react";



function NoteForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [loading,setloading] = useState(false);

    const handleSubmit = async() =>{
      if(!title || !content){
        alert("Title and Content are required");
        return;
      }
      try{
        setloading(true)
        const res = await axios.post("http://localhost:5000/create-post",{
          title,
          content,
          tags: tags.split(",").map(tag=>tag.trim()),
        });
        console.log(res.data)
         setTitle("");
         setContent("");
         setTags("");
         refresh();

      }catch(err){
        console.log(err)
        res.status(500).json({message: err.message})

      }finally{
        setloading(false)
      }
    }
  
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

      <button onClick={handleSubmit} disabled= {loading}>{loading ? "Adding..." : "Add Note"}</button>
    </div>
  );
}


export default NoteForm;