import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchServiceById } from "../services/api";
import "./styles/Services.css";
import Preloader from "../components/Preloader";

interface IServiceDetail {
  _id: string;
  service_title: string;
  service_description: string;
  service_head:string;
  service_tag:string;
  service_category: string;
  service_template: string;
  image_url: string;
  image_url1: string;

  created_at: Date;
  created_by: string;
}

const ServiceDetail: React.FC = () => {
  const location = useLocation();
  const serviceId = new URLSearchParams(location.search).get("id");
  const [service, setService] = useState<IServiceDetail | null>(null);

  useEffect(() => {
    if (serviceId) {
      fetchServiceById(serviceId)
        .then((response) => {
          setService(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the project details:", error);
        });
    }
  }, [serviceId]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mar sdbg">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container ser">
          <div className="head">
            <h3>{service.service_head}</h3>
            <h6>{service.service_tag}</h6>
          </div>
          <div className="body">
            <h5>{service.service_title}</h5>
            <img src={service.image_url1}></img>


          </div>
          <div className="container">
            <h2>{service.service_template}</h2>
            <h6>{service.service_description}</h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
{/* <h1 className="ser-title mb-5">{service.service_title}</h1>
          <div className="ser-det">
            <img
              src={service.image_url}
              className="img mb-4"
              alt={service.service_title}
            />
            <h5 className="ser-head mb-4">{service.service_category}</h5>
              <p className="description">{service.service_description}</p>
          </div> */}