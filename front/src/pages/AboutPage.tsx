import React from "react";
import About from "../components/About";
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const AboutPage: React.FC = () => {
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
    <div className="container-fluid mar">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container-fluid">
        <About/>
        </div>
      )}
    </div>
  );
};
export default AboutPage;