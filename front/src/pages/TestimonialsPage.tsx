import React from "react";
import Testimonials from "../components/testimonials";
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const TestimonialsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
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