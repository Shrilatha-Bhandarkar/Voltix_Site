import Navbar from './Components/Navbar.tsx'
import Home from './Components/Home.tsx'
import Services from './Components/Services.tsx'
import Projects from './Components/Projects.tsx'
import About from './Components/About.tsx'
import Contact from './Components/Contact.tsx'
import React from 'react';
import './Components/Navbar.css';
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

