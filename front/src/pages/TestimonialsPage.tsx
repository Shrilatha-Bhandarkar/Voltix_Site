import React from "react";
import Testimonials from "../components/testimonials";
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const TestimonialsPage: React.FC = () => {
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
    <div className="mar">
      {isLoading ? <Preloader /> : null}
      <h1>Testimonials</h1>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;