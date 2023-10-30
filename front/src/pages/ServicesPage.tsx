import React from "react";
import Services from '../components/services';
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const ServicesPage : React.FC =()=>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return(
        <div className="mar">
            {isLoading ? <Preloader /> : null}
            <Services />
        </div>
    );
};

export default ServicesPage;