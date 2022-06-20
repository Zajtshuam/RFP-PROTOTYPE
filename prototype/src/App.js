import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage/>}/>
          <Route path='/second' element={<SecondPage/>}/>
          <Route path='/third' element={<ThirdPage/>}/>
        </Routes>
      </Router>
    </div>
   
  )
}




