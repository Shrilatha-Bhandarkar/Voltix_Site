import { useEffect, useState } from "react";
import { fetchTestimonials } from "../services/api";
import './styles/Home.css';
import StarRating from './StarRating';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'boxicons';

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
  const NextArrow = (props: any) => (
    <button {...props} className="slick-arrow custom-slick-arrow next-arrow">
      <i className='bx bx-right-arrow-alt'></i>
    </button>
  );

  const PrevArrow = (props: any) => (
    <button {...props} className="slick-arrow custom-slick-arrow1 prev-arrow">
      <i className='bx bx-left-arrow-alt' ></i>
    </button>
  );
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:  <NextArrow /> ,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="container-fluid">
      <h2 className="head">Trusted by Millions of Customers.</h2>
      <h5 className="sub-head">
        We have been successful in developing business solutions in large part because of our talented and devoted workforce.
      </h5>

      <Slider {...sliderSettings}> 
        {testimonial.map((entry) => (
          <div className="card1" key={entry._id}>
            <div className="card1-body d-flex flex-column">
              <div className="card1-title-container text-center">
                <h5 className="card1-title">
                  {entry.testimonial_author}
                </h5>
                <div className="line"></div>
              </div>
              <h6 className="service card-text text-center">{entry.testimonial_service}</h6>
              <h6 className="card1-text text-center mb-0">{entry.testimonial_content}</h6>
              <div className="star-rating text-center">
                <StarRating rating={entry.rating} maxRating={5} />
              </div>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="End"></div>
    </div>
  );
};

export default HomeTestimonial;