import React from 'react'
import UserList from './pages/UserList'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>

  )
}

export default App