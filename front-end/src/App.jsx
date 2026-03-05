import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import NavBar from './components/Nav-Bar'
import { Routes, Route } from 'react-router-dom'
import AddTask from './components/AddTask'
import Lists from './components/Lists'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Lists/>}/>
        <Route path="/add" element={<AddTask/>}/>
      </Routes>
    </>
  )
}

export default App
