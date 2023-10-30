import React from "react";
import Projects from '../components/projects';
import  './styles/Page.css';
import Preloader from "../components/Preloader";
import { useState, useEffect } from 'react';

const ProjectsPage : React.FC =()=>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);
    return(
        <div className="mar">
            {isLoading ? <Preloader /> : null}
            <Projects />
        </div>
    );
};

export default ProjectsPage;