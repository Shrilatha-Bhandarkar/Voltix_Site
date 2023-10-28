import React, { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import "../components/styles/Projects.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProjects } from "../services/api";

export interface IProject {
  _id: string;
  project_title: string;
  project_description: string;
  project_category: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const Projects: React.FC = () => {
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
    <div className="container1">
      <div className="head">Great Design That Actually Works!</div>
      <div className="des">Our versatile team is built of designers, developers and digital marketers<br></br> who all bring unique experience.</div>
      <div className="row">
        {projects.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4">
              <img src={entry.image_url} className="card-img-top" alt={entry.project_title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{entry.project_title}  <Link to={`/projects/id?id=${entry._id}`}> 
                <i className='bx bxs-right-arrow-circle'></i>
                </Link></h5>
                
                <div className="mt-auto text-end">
               
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
