import React, { useEffect, useState } from "react";
import { fetchData} from "../services/api";

interface IAbout {
    _id: string;
    title: string;
    content: string;
  }
  const About: React.FC = () => {
    const [data, setData] = useState<IAbout[]>([]);
  
    useEffect(() => {
        fetchData()
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching the details:", error);
          });
    }, []);
  
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        {data.map((entry) => (
          <div className="col-md-4" key={entry._id}>
            <div className="card mb-4">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{entry.title}</h5>
                <p className="card-text">{entry.content}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    );
  };

export default About;