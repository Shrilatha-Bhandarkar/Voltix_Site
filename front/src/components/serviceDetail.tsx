import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchServiceById } from "../services/api";

interface IServiceDetail {
  _id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  service_template:string;
  image_url: string;
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

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{service.service_title}</h1>
      <div className="card">
        <img src={service.image_url} className="card-img-top" alt={service.service_title} />
        <h5 className="card-header">{service.service_category}</h5>
        <div className="card-body">
          <p className="card-text">{service.service_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
