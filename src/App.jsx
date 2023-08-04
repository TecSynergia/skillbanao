import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatWithCA from './components/Chat-with-CA/ChatWithCA'
import Footer from './components/Footer'
import Home from './components/Home'
import Chat from './components/Chat'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/chat-with-CA' element={<ChatWithCA />} />
          <Route path="/chat" element={<Chat /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default App
