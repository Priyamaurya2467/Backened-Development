import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // Fetch all posts
  const loadPosts = async () => {
    const res = await fetch("http://localhost:5000/fetch-post");
    const data = await res.json();
    setPosts(data.posts);
  };

  // Add message
  const addPost = async () => {
    if (!message) return;

    await fetch("http://localhost:5000/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    setMessage("");
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-5">Message Board</h1>

      {/* Input Box */}
      <div className="mb-5">
        <input
          className="border p-2 mr-2 w-64"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={addPost}
        >
          Post
        </button>
      </div>

      {/* Messages List */}
      <div>
        {posts.map((item) => (
          <div
            key={item._id}
            className="bg-white p-3 mb-3 shadow border"
          >
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;