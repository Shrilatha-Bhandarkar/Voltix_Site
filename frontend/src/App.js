import Navbar from './Components/Navbar.tsx'
import Home from './Pages/Home.tsx'
import Services from './Pages/Services.tsx'
import Projects from './Pages/Projects.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Footer from './Components/Footer.tsx'
import React from 'react';
import MobileApps from './Pages/MobileApps.tsx'
import WebDevelopment from './Pages/WebDevelopment.tsx'
import SoftwareDevelopment from './Pages/SoftwareDevelopment.tsx'
import DigitalMarketing from './Pages/DigitalMarketing.tsx'
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
        <Route path="/services" element={<Services />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}

export default App;

