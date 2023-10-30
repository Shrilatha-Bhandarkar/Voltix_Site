import React, { useEffect, useState } from "react";
import { fetchData} from "../services/api";
import './styles/About.css'

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
      <div className="container mt-4 mb-4">
        {data.map((entry) => (
          <div className="row" key={entry._id}>
            <div className="card mb-4 ab">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title ab-title">{entry.title}</h5>
                <p className="card-text ab-content">{entry.content}</p>
            </div>
          </div>
          </div>
        ))}
        
        <div className="number-list">
      <div className="bubble">
        <div className="number">1</div>
        <div className="arrow">
          <i className="gg-arrow-long-down"></i>
        </div>
      </div>
      <div className="bubble">
        <div className="number">2</div>
        <div className="arrow">
          <i className="gg-arrow-long-down"></i>
        </div>
      </div>
      <div className="bubble">
        <div className="number">3</div>
        <div className="arrow">
          <i className="gg-arrow-long-down"></i>
        </div>
      </div>
    </div>
        
      </div>
    );
  };

export default About;