import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">

      {/* Glass Card */}
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-[380px] text-center transition-all duration-300 hover:scale-105">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-3">
          🚀 Welcome
        </h1>

        {/* Subtext */}
        <p className="text-white/80 mb-8">
          Create something amazing or explore more about us.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">

          <button
            onClick={() => navigate('/create-post')}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            ✨ Let's Create
          </button>

          <button
            onClick={() => navigate('/feed')}
            className="px-5 py-2 rounded-lg bg-white text-gray-800 font-semibold shadow-md hover:bg-gray-200 hover:scale-110 transition-all duration-300"
          >
            📖 Know More
          </button>

        </div>

      </div>
    </div>
  )
}

export default Home