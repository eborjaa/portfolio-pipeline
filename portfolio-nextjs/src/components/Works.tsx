"use client";

import Image from "next/image";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Portfolio CI/CD Pipeline",
      description:
        "End-to-end CI/CD pipeline implementation with automated Playwright testing, Jenkins integration, and comprehensive reporting. Features automated test execution, HTML report generation, and artifact management with Newman for API testing.",
      category: "DevOps & Test Automation",
      image: "/img/works/01.jpg",
      technologies: ["Playwright", "Jenkins", "Newman", "HTML Reports", "CI/CD"],
      github: "https://github.com/eborjaa/portfolio-pipeline",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and TypeScript. Features dark mode, smooth animations, contact form integration, and optimized performance. Showcases professional experience, skills, and projects with a clean, user-friendly interface.",
      category: "Web Development",
      image: "/img/works/02.jpg",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "AOS"],
      github: "https://github.com/eborjaa/portfolio-pipeline",
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="project-img"
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="380px"
                  style={{ objectFit: 'cover' }}
                  unoptimized={true}
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
