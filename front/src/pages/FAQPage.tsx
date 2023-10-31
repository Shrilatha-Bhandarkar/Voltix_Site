import FAQ from "../components/FAQ";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const FAQPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const delay = 1000;
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, delay);
        return () => clearTimeout(timer);
      }, []);
    return ( 
        <div className="container mar">
            {isLoading ? (
        <Preloader />
      ) : (
        <FAQ/>
      )}
        </div>
     );
}
 
export default FAQPage;