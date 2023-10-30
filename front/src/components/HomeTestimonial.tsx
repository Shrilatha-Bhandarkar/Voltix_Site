import React, { useEffect, useState } from "react";
import { fetchTestimonials } from "../services/api";
import './styles/Home.css';
import StarRating from './StarRating'; // Import the StarRating component

interface ITestimonial {
  _id: string;
  testimonial_author: string;
  testimonial_content: string;
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

  return (
    <div className="container">
      <h2 className="head">Trusted by Millions of Customers.</h2>
      <h5 className="sub-head">
        We have been successful in developing business solutions in large part because of our talented and devoted workforce.
      </h5>
      <div className="row">
        {testimonial.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4 mt-4">
              <div className="card-body d-flex flex-column">
              {/* <h5 className="card-title with-underline">
               {entry.testimonial_author}
              </h5> */}
              <div className="card-title-container text-center">
               <h5 className="card-title">
                 {entry.testimonial_author}
               </h5>
              <h4 className="card-text">{entry.testimonial_service}</h4>
              <div className="line"></div>
             </div>

                <h6 className="card-text">{entry.testimonial_content}</h6>
                <div className="star-rating text-center">
                  <StarRating rating={entry.rating} maxRating={5} />
                </div>

                <div className="mt-auto text-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTestimonial;
