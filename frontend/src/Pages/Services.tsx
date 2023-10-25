import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions tailored to your needs.',
    },
    {
      title: 'Mobile App Development',
      description: 'We build mobile apps for both iOS and Android platforms.',
    },
    {
      title: 'UI/UX Design',
      description: 'Creating user-friendly and visually appealing interfaces.',
    },
    {
      title: 'Digital Marketing',
      description: 'Effective digital marketing strategies to boost your online presence.',
    },
    {
      title: 'SEO Services',
      description: 'Improving your websites visibility on search engines.',
    },
    {
      title: 'Content Creation',
      description: 'Engaging and informative content to attract your audience.',
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
