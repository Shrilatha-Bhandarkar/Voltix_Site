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
    <div className="container-fluid mar sdbg">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container-fluid ser">
          <div className="head">
            <h2>{service.service_head}</h2>
            <h5>{service.service_tag}</h5>
          </div>
          <div className="body">
            <h5>{service.service_title}</h5>
            <img src={service.image_url1} alt={service.service_title}></img>
          </div>
          <div className="container-fluid mt-4 mb-5">
            <h2 className="mb-3">{service.service_template}</h2>
            <p className="ser-des">{service.service_description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;