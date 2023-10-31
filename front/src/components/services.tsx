import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Services.css";
import { fetchServices } from "../services/api";

export interface IService {
  _id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  service_head:string;
  service_tag:string;
  service_template: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const Services: React.FC = () => {
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
    <div className="container1 sb">
      <div className="head">
        The software development company that puts your needs first
      </div>
      <div className="des">
        Voltix Solution is a software company offering web and mobile app
        development, digital marketing,<br></br> with a skilled team focused on
        tech-driven solutions.
      </div>
      <div className="row">
        {services.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4 c_ser">
              <img
                src={entry.image_url}
                className="card-img-top ser-img"
                alt={entry.service_title}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-center ">
                  {entry.service_title}
                </h4>
                <h6 className="card-text text-center">
                  {entry.service_template}
                </h6>
                <div className="text-center mt-3">
                  <Link to={`/services/id?id=${entry._id}`}>
                    <button className="btn btn-primary ser-btn">
                      Know More
                    </button>
                  </Link>
                </div>
                <div className="mt-auto text-end"></div>
              </div>
              </div>
            </div>
        ))}
      </div>
      <div id="content">
        <h1>Why Branding Matters More Than Ever</h1>
        <p>A strong brand can help you stand out from the competition, attract new customers, and build loyalty among your existing customers.</p>
        <h2>Be authentic</h2>
        <p>Your brand should reflect your values.</p>
        <h2>Be consistent</h2>
        <p>Be consistent with your branding efforts.</p>
        <h2>Be patient</h2>
        <p>Don't let your brand get lost in the noise.</p>
    </div>
    </div>
  );
};

export default Services;
