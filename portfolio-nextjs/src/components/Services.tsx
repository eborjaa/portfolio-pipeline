'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: '/img/services/01.svg',
      title: 'Test Automation',
      description: 'Creating comprehensive test automation frameworks using Playwright, Selenium, and modern testing tools to ensure software quality and reliability.'
    },
    {
      icon: '/img/services/02.svg',
      title: 'CI/CD Pipeline Development',
      description: 'Building and maintaining continuous integration and deployment pipelines with Jenkins, GitHub Actions, and cloud platforms for automated testing and deployment.'
    },
    {
      icon: '/img/services/03.svg',
      title: 'API Testing',
      description: 'Designing and implementing API testing strategies using Postman, Newman, and REST Assured to validate backend services and integrations.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
          Services
        </h2>
        <div className="services-row">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 300}
            >
              <Image
                className="service-card-img"
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
              />
              <h3 className="service-card-title">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
