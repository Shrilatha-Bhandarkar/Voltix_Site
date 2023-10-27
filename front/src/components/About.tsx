import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataById} from "../services/api";

interface IAbout {
    _id: string;
    title: string;
    content: string;
  }
  const About: React.FC = () => {
    const location = useLocation();
    const Id = new URLSearchParams(location.search).get("id");
    const [data, setData] = useState<IAbout | null>(null);
  
    useEffect(() => {
      if (Id) {
        fetchDataById(Id)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching the details:", error);
          });
      }
    }, [Id]);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    );
  };

export default About;