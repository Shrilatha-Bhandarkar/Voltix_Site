import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const HomePage: React.FC = () => {
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
    <div className="container one mar">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="services">
                <HomeService />
                <HomeProject />
                <HomeTestimonial />
            </div>
      )}
 </div>
  );
};
 
export default HomePage;



