import React from "react";
import Testimonials from "../components/testimonials";
import  './styles/Page.css';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="mar">
      <h1>Testimonials</h1>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;