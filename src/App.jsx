import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ChatWithCA from './components/ChatWithCA'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/chat-with-CA' element={<ChatWithCA />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
      
    </BrowserRouter>
  )
}

export default App
