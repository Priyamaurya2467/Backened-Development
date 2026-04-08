import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Feed from './pages/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create-post' element = {<CreatePost/>}></Route>
        <Route path = '/feed' element={<Feed/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App