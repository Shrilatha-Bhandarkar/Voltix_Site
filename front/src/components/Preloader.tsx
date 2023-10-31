import React, { useState, useEffect } from 'react';
import './styles/Preloader.css';


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    },500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader-container">
      <div className="preloader"></div>
    </div>
    );
  }
  return null;

};

export default Preloader;
