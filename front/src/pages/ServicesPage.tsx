import React, { useState, useEffect } from 'react';
import Services from '../components/services';
import './styles/Page.css';
import Preloader from '../components/Preloader';
import SocialFeeds from './SocialFeeds';

const ServicesPage: React.FC = () => {
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
       <div className='container-fluid'> <Services />
       <SocialFeeds /> </div>
      )}
    </div>
  );
};

export default ServicesPage;
