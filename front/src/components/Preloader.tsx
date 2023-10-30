import React, { useState, useEffect } from 'react';
import './styles/Preloader.css';


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    },900);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    );
  }
  return null;

};

export default Preloader;
