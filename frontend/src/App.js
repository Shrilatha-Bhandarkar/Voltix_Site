import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
