import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); 
      }
    };

    fetchData();
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