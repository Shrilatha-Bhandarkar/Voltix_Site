import { IProject } from "./projects"; 
import { fetchProjects } from "../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'boxicons';

const HomeProject = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  useEffect(() => {
    fetchProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Projects:", error);
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
    <div className="container-fluid hp">
      <h1 className="head">Check out our Projects</h1>
      <h5 className="sub-head">
      Our endeavours serve as examples of our dedication to excellence
      </h5>
      {/* <div className="row">
      {projects.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4">
            <img
              src={entry.image_url}
              className="card-img-top"
              alt={entry.project_title}
            />
            <div className="card-body d-flex flex-column">
            <Link to={`/projects/id?id=${entry._id}`}>
            <h5 className="card-title text-center pro-tit">
                {entry.project_title}{" "}
              </h5>
            </Link>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        </div>
      ))}
      </div> */}
      <Slider {...sliderSettings}>
      {projects.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4">
            <img
              src={entry.image_url}
              className="card-img-top"
              alt={entry.project_title}
            />
            <div className="card-body d-flex flex-column">
            <Link to={`/projects/id?id=${entry._id}`}>
            <h5 className="card-title text-center pro-tit">
                {entry.project_title}{" "}
              </h5>
            </Link>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        </div>
      ))}
      </Slider>
      <div className="End"></div>
    </div>
  );
};

export default HomeProject;