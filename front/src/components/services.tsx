import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/Services.css";
import { fetchServices} from "../services/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


interface IService {
  _id: string;
  service_title: string;
  service_description: string;
  service_category: string;
  service_template:string;
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
    <div className="container">
      <div className="head">The software development company that puts your needs first</div>
      <div className="des">Voltix Solution is Software company offering web and mobile app development,<br></br> digital marketing, with a skilled team focused on tech-driven solutions.</div>
      <div className="row">
      {services.map((entry) => (
  <div className="col-md-4" key={entry._id}>
    <div className="card mb-4">
      <img src={entry.image_url} className="card-img-top" alt={entry.service_title} />
      {/* <h5 className="card-header">{entry.service_category}</h5> */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{entry.service_template}</h5>
        <div className="mt-auto text-end">

        {/* <p className="card-text">{entry.service_template}</p> */}
        <Link to={`/services/id?id=${entry._id}`}> {/* Use the route you defined */}
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;