import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./components/projectDetail";
import ServiceDetail from "./components/serviceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects/id" element={<ProjectDetail />} />
          <Route path="/services/id" element={<ServiceDetail />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
