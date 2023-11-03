import React, { useState, useEffect } from 'react';
import Feed from '../components/Feed';
import './styles/Page.css';
import Preloader from '../components/Preloader';

const FeedPage: React.FC = () => {
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
       <div className='container-fluid'> <Feed /> </div>
      )}
    </div>
  );
};

export default FeedPage;
