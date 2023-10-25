import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions tailored to your needs.',
      content: 'Web development content goes here.',
    },
    {
      title: 'Mobile App Development',
      description: 'We build mobile apps for both iOS and Android platforms.',
      content: 'Mobile app development content goes here.',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly and visually appealing interfaces.',
      content: 'UI/UX design content goes here.',
    },
    {
      title: 'Digital Marketing',
      description: 'Effective digital marketing strategies to boost your online presence.',
      content: 'Digital marketing content goes here.',
    },
    {
      title: 'SEO Services',
      description: 'Improving your website\'s visibility on search engines.',
      content: 'SEO services content goes here.',
    },
    {
      title: 'Content Creation',
      description: 'Engaging and informative content to attract your audience.',
      content: 'Content creation content goes here.',
    },
  ];

  return (
    <div className="page1">
      <h1>The software development company that puts your needs first</h1>
      <p>
        We offer a wide range of services to meet your needs. Our services include:
      </p>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <h1>Service Details</h1>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
      <div className="additional-contents">
        <div className="additional-content">
          <h1>Additional Content 1</h1>
          <p>Additional content paragraph 1 goes here.</p>
        </div>
        <div className="additional-content">
          <h1>Additional Content 2</h1>
          <p>Additional content paragraph 2 goes here.</p>
        </div>
        <div className="additional-content">
          <h1>Additional Content 3</h1>
          <p>Additional content paragraph 3 goes here.</p>
        </div>
        <div className="additional-content">
          <h1>Additional Content 4</h1>
          <p>Additional content paragraph 4 goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
