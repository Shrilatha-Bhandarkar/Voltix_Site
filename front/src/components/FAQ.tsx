import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchFaq } from "../services/api";
import './styles/Faq.css'

export interface IFaq {
  _id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [faq, setFaq] = useState<IFaq[]>([]);

  useEffect(() => {
    fetchFaq()
      .then((response) => {
        setFaq(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the FAQs:", error);
      });
  }, []);

  return (
    // <div className="theme-container">
   <div className="text-content">
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-5">Frequently Asked Questions</h2>
      <div className="accordion mb-5" id="accordionExample">
        {faq.map((entry, index) => (
          <div className="card faq" key={entry._id}>
            <div className="card-header" id={`heading${index}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link Ques"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {entry.question}
                </button>
              </h2>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#accordionExample"
            >
              <div className="card-body ans">{entry.answer}</div>
            </div>
          </div>
        ))}</div>
        <div className="end"></div>
      </div>
    </div>
    // </div>
  );
};

export default FAQ;
