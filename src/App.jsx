import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './views/Home';

const App = () => {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App