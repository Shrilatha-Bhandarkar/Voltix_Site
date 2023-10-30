import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "../services/api";
import './styles/Home.css';
import StarRating from './StarRating'; // Import the StarRating component
import Slider from "react-slick"; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

interface ITestimonial {
  _id: string;
  testimonial_author: string;
  testimonial_content: string;
  testimonial_service: string;

  rating: number; 
}

const HomeTestimonial = () => {
  const [testimonial, setTestimonial] = useState<ITestimonial[]>([]);

  useEffect(() => {
    fetchTestimonials()
      .then((response) => {
        setTestimonial(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Testimonials:", error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <h2 className="head">Trusted by Millions of Customers.</h2>
      <h5 className="sub-head">
        We have been successful in developing business solutions in large part because of our talented and devoted workforce.
      </h5>
<<<<<<< HEAD
      <Slider {...sliderSettings}> {/* Use the Slider component with settings */}
        {testimonial.map((entry) => (
          <div className="card1" key={entry._id}>
            <div className="card1-body d-flex flex-column">
              <div className="card1-title-container text-center">
                <h5 className="card1-title">
                  {entry.testimonial_author}
                </h5>
                <div className="line"></div>
              </div>
              <h6 className="card1-text text-center">{entry.testimonial_content}</h6>
              <div className="star-rating text-center">
                <StarRating rating={entry.rating} maxRating={5} />
              </div>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        ))}
      </Slider>
=======
      <div className="row">
      {testimonial.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">
                {entry.testimonial_author}{" "}
              </h5>
              <h6 className="card-text text-center">{entry.testimonial_service}</h6>
              <h6 className="card-text text-center">{entry.testimonial_content}</h6>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        </div>
      ))}
      </div>
>>>>>>> a223b4f79db1ed4f893d31d834e018c353540894
    </div>
  );
};

export default HomeTestimonial;
