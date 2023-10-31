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
      {/* <div className="container-fluid card-bubble">
        <h3 className="mb-3">We are here to redefine the way you do your business!</h3>
        <h5 className="mb-4">Our process – How we get things done for you.</h5>
      <div className="number-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bubble-arrow">
            <div className={`bubble ${index < activeBubble ? 'filled' : ''}`} key={index}>
              <div className="number">{index + 1}</div>
            </div>
            {index < 2 && (
              <div className={`arrow ${index < activeBubble - 1 ? 'hidden' : ''}`}>
                <i className="gg-arrow-long-down"></i>
              </div>

            )}
          </div>
        ))}
      </div>
      </div> */}
    </div>
  );
};

export default About;
