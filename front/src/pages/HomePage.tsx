import React from "react";
import HomeService from "../components/HomeService";
import HomeProject from "../components/HomeProject";
import HomeTestimonial from "../components/HomeTestimonial";
const HomePage = () => {
    return ( 
        <div className="container">
            <div className="services">
                <HomeService />
                <HomeProject />
                <HomeTestimonial />
            </div>
        </div>
     );
}
 
export default HomePage;