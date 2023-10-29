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
      <h1 className="head">Our Actions and Motivations</h1>
      <h5 className="sub-head">
        Our skilled and dedicated team plays a significant role in our ability
        to successfully develop business solutions.
      </h5>
      <div className="row">
      {services.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4 mt-4 hser-tit">
            <div className="card-body d-flex flex-column">
              <h3 className="card-title text-center mb-4">
                {entry.service_title}{" "}
              </h3>
              <h5 className="card-title text-center">{entry.service_template}</h5>
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
