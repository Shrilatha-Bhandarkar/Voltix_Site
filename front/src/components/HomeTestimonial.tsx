import { ITestimonial } from "./testimonials"; 
import { fetchTestimonials } from "../services/api";
import React, { useEffect, useState } from "react";
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
      <h2>Trusted by Millions of Customers.</h2>
      <h6>
      We have been successful in developing business solutions in large part because of our talented and devoted workforce.
      </h6>
      <div className="row">
      {testimonial.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                {entry.testimonial_author}{" "}
              </h5>
              <h6 className="card-text">{entry.testimonial_content}</h6>
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