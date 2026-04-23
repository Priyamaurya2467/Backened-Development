import React from 'react'
import Navbar from './Pages/navbar'
import Form from './Pages/Form'

function App() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <Navbar/>
      <div className='bg-white max-w-2xl mx-auto p-6 rounded-xl shadow'>
         <Form/>
      </div>
     
    </div>
  )
}

export default App