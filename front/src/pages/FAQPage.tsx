import FAQ from "../components/FAQ";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const FAQPage = () => {
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
        <FAQ/>
      )}
        </div>
       
     );
}
 
export default FAQPage;