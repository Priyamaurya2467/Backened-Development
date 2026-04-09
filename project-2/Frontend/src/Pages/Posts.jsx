import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Posts() {
  const [posts, setPosts] = useState([])
  const [commentText, setCommentText] = useState({})

  // ✅ Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts")
      setPosts(res.data.posts || res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // ✅ Like handler (safe)
  const handleLike = (id) => {
    setPosts(prev =>
      prev.map(p =>
        p._id === id ? { ...p, likes: (p.likes || 0) + 1 } : p
      )
    )
  }

  

  // ✅ Add comment (FIXED)
  const handleAddComment = async (postId) => {
    const text = commentText[postId]
    if (!text.trim()) return

    try {
      const res = await axios.post(
        `http://localhost:5000/posts/${postId}/comment`,
        { text }
      )

      // 🔥 FIX: res.data (not res.data.post)
      setPosts(prev =>
        prev.map(p =>
          p._id === postId ? {
            ...p,
            comments: [...(p.comments || []), {text}]
          } : p
        )
      )

      setCommentText(prev => ({
        ...prev,
        [postId]: ""
      }))

    } catch (err) {
      console.log(err)
    }
  }

  const handleDeletePost = async (postId) => {
    
    try {
      await axios.delete(
        `http://localhost:5000/posts/${postId}`
      )
      setPosts(prev=>prev.filter(p=>p._id !== postId))
    }

      catch(err){
        console.log(err)
      }
  }



  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Latest Posts
      </h2>

      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-xl shadow-md p-4 mb-6 flex gap-4"
          >

            {/* Image */}
            <img
              src={post.image}
              alt=""
              className="w-40 h-28 object-cover rounded-md"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500">
                By {post.author}
              </p>

              <p className="mt-2">{post.caption}</p>

              {/* Likes */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500">❤️</span>
                <span>{post.likes || 0} Likes</span>

                <button
                  onClick={() => handleLike(post._id)}
                  className="ml-4 text-blue-600 text-sm"
                >
                  Like
                </button>
              </div>

              {/* Comments */}
              <div className="mt-3 border-t pt-2">
                {post.comments?.map((c, i) => (
                  <p key={i} className="text-sm text-gray-700">
                    💬 {c.text}
                  </p>
                ))}
              </div>

              {/* Add Comment */}
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentText[post._id] || ""}
                  onChange={(e) =>
                    setCommentText(prev => ({
                      ...prev,
                      [post._id]: e.target.value
                    }))
                  }
                  className="flex-1 border rounded-md p-1"
                />

                <button
                  onClick={() => handleAddComment(post._id)}
                  className="bg-blue-600 text-white px-3 rounded-md"
                >
                  Add
                </button>


                {/* Delete button */}
                 <button
                  onClick={() => handleDeletePost(post._id)}
                  className="bg-red-600 text-white px-3 rounded-md"
                >
                  Delete Post
                </button>

              </div>

            </div>
          </div>
        ))
      ) : (
        <h1>No posts yet...</h1>
      )}
    </div>
  )
}

export default Posts