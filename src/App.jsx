import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ChatWithCA from './components/Chat-with-CA/ChatWithCA'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>

        <Routes>
       
          <Route path='/chat-with-CA' element={<ChatWithCA/>} />
        </Routes>

        <Footer/>
    </BrowserRouter>
  )
}

export default App
