import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProjectById } from "../services/api";

interface IProjectDetail {
  _id: string;
  project_title: string;
  project_description: string;
  project_category: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  const projectId = new URLSearchParams(location.search).get("id");
  const [project, setProject] = useState<IProjectDetail | null>(null);

  useEffect(() => {
    if (projectId) {
      fetchProjectById(projectId)
        .then((response) => {
          setProject(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the project details:", error);
        });
    }
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{project.project_title}</h1>
      <div className="card">
        <img src={project.image_url} className="card-img-top" alt={project.project_title} />
        <h5 className="card-header">{project.project_category}</h5>
        <div className="card-body">
          <p className="card-text">{project.project_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
