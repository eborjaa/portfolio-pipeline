'use client';

import Image from 'next/image';

export default function Works() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Test Automation',
      description: 'Comprehensive test suite for e-commerce platform',
      category: 'Test Automation',
      image: '/img/works/01.jpg',
      technologies: ['Playwright', 'TypeScript', 'Jenkins']
    },
    {
      id: 2,
      title: 'API Testing Framework',
      description: 'RESTful API testing framework with Postman',
      category: 'API Testing',
      image: '/img/works/02.jpg',
      technologies: ['Postman', 'Newman', 'Node.js']
    },
    {
      id: 3,
      title: 'CI/CD Pipeline Setup',
      description: 'Jenkins pipeline for automated testing and deployment',
      category: 'DevOps',
      image: '/img/works/03.jpg',
      technologies: ['Jenkins', 'Docker', 'AWS']
    },
    {
      id: 4,
      title: 'SDET Portfolio',
      description: 'Modern portfolio showcasing testing and development skills',
      category: 'Web Development',
      image: '/img/works/04.jpg',
      technologies: ['Next.js', 'React', 'TypeScript']
    },
    {
      id: 5,
      title: 'Mobile App Testing',
      description: 'Cross-platform mobile application testing suite',
      category: 'Mobile Testing',
      image: '/img/works/05.jpg',
      technologies: ['Appium', 'Java', 'Selenium']
    },
    {
      id: 6,
      title: 'Performance Testing',
      description: 'Load testing and performance optimization',
      category: 'Performance Testing',
      image: '/img/works/06.jpg',
      technologies: ['JMeter', 'K6', 'Grafana']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container container-lg">
        <div className="projects-title">
          <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
            My Works
          </h2>
        </div>
        <div className="projects-row">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-box"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 300}
              data-aos-duration="1000"
            >
              <a href="#!">
                <Image
                  className="project-img"
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                />
                <div className="project-mask">
                  <div className="project-caption">
                    <h5 className="white">{project.title}</h5>
                    <p className="white">{project.category}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
