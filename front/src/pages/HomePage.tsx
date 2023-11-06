import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
import HomeHead from "../components/HomeHead";
import Preloader from "../components/Preloader";
import React, { useState, useEffect } from "react";
import "./styles/Page.css";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mar">
      {isLoading ? (
        <Preloader />
      ) : (
        //   <div className="container-fluid">
        //       <div className="area">
        //           <div className="services">
        //               <HomeHead />
        //               <HomeService />
        //               <HomeProject />
        //               <HomeTestimonial />
        //           </div>
        //       </div>
        //       <div className="circles">
        //           <ul>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //               <li></li>
        //           </ul>
        //       </div>
        //   </div>
        <div className="services">
          <HomeHead />
          <HomeService />
          <HomeProject />
          <HomeTestimonial />
        </div>
      )}
    </div>
  );
};

export default HomePage;
