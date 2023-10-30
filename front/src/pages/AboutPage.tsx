import About from "../components/About";
import  './styles/Page.css';
import React, { useState, useEffect } from 'react';
import Preloader from "../components/Preloader";

const AboutPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return ( 
        <div>
            <div className="container mar">
            {isLoading ? <Preloader /> : null}
            <About />
            </div>
        </div>
     );
}
 
export default AboutPage;