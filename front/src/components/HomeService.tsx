import { IService } from "../components/services";
import { fetchServices } from "../services/api";
import React, { useEffect, useState } from "react";
import './styles/Home.css'
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
    <div className="contaner">
      <h2 className="head">Our Actions and Motivations</h2>
      <h5 className="sub-head">
        Our skilled and dedicated team plays a significant role in our ability
        to successfully develop business solutions.
      </h5>
      <div className="row">
      {services.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4">
            <img
              src={entry.image_url}
              className="card-img-top"
              alt={entry.service_title}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                {entry.service_title}{" "}
              </h5>
              <div className="mt-auto text-end"></div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HomeService;
