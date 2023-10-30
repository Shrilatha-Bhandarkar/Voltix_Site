import FAQ from "../components/FAQ";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const FAQPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return ( 
        <div className="container mar">
            {isLoading ? <Preloader /> : null}
            <FAQ />
        </div>
     );
}
 
export default FAQPage;