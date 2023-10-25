import Navbar from './Components/Navbar.tsx'
import Home from './Pages/Home.tsx'
import Services from './Pages/Services.tsx'
import Projects from './Pages/Projects.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
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

