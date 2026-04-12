import React from 'react'
import axios from 'axios'
function Creation() {

  const handleSubmitHandler = async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    axios.post("http://localhost:5000/posts",formData)
    try{
       await axios.post(
        "https://localhost:5000/posts",formData
      )
      alert("Post created")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    
    
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Create a New Post
        </h1>

        <form className="space-y-4" onSubmit={handleSubmitHandler}>
          <input 
          type="file" 
          name='image' 
          accept='image/*' 
          className="w-full border rounded-md p-2"
          required />
          
          <input
            type="text"
            name='title'
            placeholder="Title"
            className="w-full border rounded-md p-2"
            required
          />
          <input
            type="text"
            name='author'
            placeholder="Author"
            className="w-full border rounded-md p-2"
            required
          />
          <textarea
            name='caption'
            placeholder="Caption"
            className="w-full border rounded-md p-2"
            required
          ></textarea>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md" type='submit'>
            Post
          </button>
        </form>
      </div>
  )
}

export default Creation