import { IService } from "../components/services";
import { fetchServices } from "../services/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/Home.css';

const HomeService = () => {
  const [services, setServices] = useState<IService[]>([]);

  useEffect(() => {
    fetchServices()
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the Services:", error);
      });
  }, []);

  return (
    <div className="container-fluid mt-5 mb-5">
      <h1 className="head">Our Actions and Motivations</h1>
      <h5 className="sub-head">
        Our skilled and dedicated team plays a significant role in our ability to successfully develop business solutions.
      </h5>

      <div className="row">
        {services.map((entry) => (
         
          <div className="col-4" key={entry._id}>
            <div className="card mb-4 mt-4 hser-tit">
              <div className="card-body d-flex flex-column p-4">
                <Link to={`/services/id?id=${entry._id}`}>
                  <h3 className="card-title text-center mb-4 ser-tit">
                    {entry.service_title}
                  </h3>
                </Link>
                <h6 className="card-text text-center text">{entry.service_template}</h6>
                <div className="mt-auto text-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="End"></div>
    </div>
  );
};

export default HomeService;
