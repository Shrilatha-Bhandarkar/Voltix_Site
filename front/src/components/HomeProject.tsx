import { IProject } from "./projects"; 
import { fetchProjects } from "../services/api";
import React, { useEffect, useState } from "react";
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
    <div className="contaner">
      <h2>Check out our Projects</h2>
      <h6>
      Our endeavours serve as examples of our dedication to excellence
      </h6>
      <div className="row">
      {projects.map((entry) => (
        <div className="col-md-4" key={entry._id}>
          <div className="card mb-4">
            <img
              src={entry.image_url}
              className="card-img-top"
              alt={entry.project_title}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                {entry.project_title}{" "}
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

export default HomeProject;