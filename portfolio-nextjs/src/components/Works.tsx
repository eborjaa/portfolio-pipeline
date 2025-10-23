'use client';

import Image from 'next/image';

export default function Works() {
  const projects = [
    {
      id: 1,
      title: 'Portfolio CI/CD Pipeline',
      description: 'Automated Playwright tests triggered via Jenkins, generating HTML reports and artifact uploads with Newman',
      category: 'Test Automation',
      image: '/img/works/01.jpg',
      technologies: ['Playwright', 'Jenkins', 'Newman', 'HTML Reports'],
      github: 'https://github.com/eborjaa/portfolio-pipeline'
    },
    {
      id: 2,
      title: 'Web Application Test Suite',
      description: 'Led automation efforts achieving 100% test coverage and reducing manual testing time by 50%',
      category: 'Test Automation',
      image: '/img/works/02.jpg',
      technologies: ['Playwright', 'POM', 'COM', 'Jenkins CI'],
      github: '#'
    },
    {
      id: 3,
      title: 'Enterprise QA Automation',
      description: 'Orchestrated QA automation for enterprise applications, overseeing patch release approvals and regression testing',
      category: 'Quality Assurance',
      image: '/img/works/03.jpg',
      technologies: ['Selenium', 'POM Framework', 'Jenkins', 'Regression Testing'],
      github: '#'
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
              <a href={project.github} target="_blank" rel="noopener noreferrer">
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
                    <p className="white">{project.description}</p>
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
