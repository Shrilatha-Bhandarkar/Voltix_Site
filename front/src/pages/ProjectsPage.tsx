import React from "react";
import Projects from '../components/projects';
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 3-second delay for the preloader
    const delay = 1000;

    // Set isLoading to false after the delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mar">
      {isLoading ? (
        <Preloader />
      ) : (
        <Projects />
      )}
    </div>
  );
};
export default ProjectsPage;