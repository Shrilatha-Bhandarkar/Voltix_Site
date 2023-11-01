import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";
import './styles/About.css';

interface IAbout {
  _id: string;
  title: string;
  content: string;
}

const About: React.FC = () => {
  const [data, setData] = useState<IAbout[]>([]);
  const [activeBubble, setActiveBubble] = useState(0);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the details:", error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeBubble < 3) {
        setActiveBubble(activeBubble + 1);
      }
    }, 2000); // Adjust the duration as needed

    return () => clearInterval(timer);
  }, [activeBubble]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mt-4 mb-4">
      {data.map((entry) => (
        <div className="row" key={entry._id}>
          <div className="mb-4 ab">
            <div className="d-flex flex-column">
              <h5 className="ab-title">{entry.title}</h5>
              <p className="ab-content">{entry.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
