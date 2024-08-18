import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Skills from './views/Skills';

const App = () => {
  return (
    <>

  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/AboutMe' element={<AboutMe/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Portfolio' element={<Portfolio/>}/>
  <Route path='/Skills' element={<Skills/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App