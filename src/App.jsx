import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz from './components/Quiz'
import Home from './components/home'
import Result from './components/Result'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/quiz" element={<Quiz />}></Route>
      <Route path="/result" element={<Result />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
