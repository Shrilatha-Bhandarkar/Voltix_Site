import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchProjectById } from "../services/api";
import "./styles/Projects.css";
import Preloader from "../components/Preloader";

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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = 1000;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mar">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container pro pdbg">
          <h1 className="pro-title mb-5">{project.project_title}</h1>
          <div className="pro-det">
            <img
              src={project.image_url}
              className="img mb-4"
              alt={project.project_title}
            />
            <h5 className="pro-head mb-4">{project.project_category}</h5>
              <p className="description">{project.project_description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
