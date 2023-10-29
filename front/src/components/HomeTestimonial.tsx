import { ITestimonial } from "./testimonials"; 
import { fetchTestimonials } from "../services/api";
import React, { useEffect, useState } from "react";
import './styles/Home.css'
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
    <div className="contaner">
      <h1 className="head">Trusted by Millions of Customers.</h1>
      <h5 className="sub-head">
      We have been successful in developing business solutions in large part because of our talented and devoted workforce.
      </h5>
      <div className="row">
      {testimonial.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">
                {entry.testimonial_author}{" "}
              </h5>
              <h6 className="card-text text-center">{entry.testimonial_content}</h6>
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