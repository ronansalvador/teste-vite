import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  console.log('teste')
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route exact path="/" element={ <Navigate to="/login" /> } /> */}
      <Route exact path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>

  )
}

