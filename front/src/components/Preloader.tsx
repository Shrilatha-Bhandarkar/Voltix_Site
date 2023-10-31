import React, { useState, useEffect } from 'react';
import './styles/Preloader.css';


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div id="preloader">
       <div id="loader"></div>
      </div>
    );
  }
  return null;

};

export default Preloader;
