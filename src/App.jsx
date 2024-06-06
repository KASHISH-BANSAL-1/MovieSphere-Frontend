import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './component/Login'
import MovieDetails from './component/Moviedetails'
import MovieListPage from './pages/MovieListPage'
import Signup from './component/Signup'
import Start from './component/Start'

function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Start/>} />
      <Route path="/signup" element={<Signup/>} />


                <Route path="/movies/:id" element={<MovieDetails/>} />
                <Route path="/lists/:id" element={<MovieListPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
