import { IProject } from "./projects"; 
import { fetchProjects } from "../services/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/Home.css'
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
  return (
    <div className="container hp">
      <h1 className="head">Check out our Projects</h1>
      <h5 className="sub-head">
      Our endeavours serve as examples of our dedication to excellence
      </h5>
      <div className="row">
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
      </div>
    </div>
  );
};

export default HomeProject;