import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from 'react';
import  './styles/Page.css';
const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return ( 
        <div className="container one mar">
            {isLoading ? <Preloader /> : null}
            <div className="services">
                <HomeService />
                <HomeProject />
                <HomeTestimonial />
            </div>
        </div>
     );
}
 
export default HomePage;