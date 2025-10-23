'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
          About Me
        </h2>
        <div className="about-row">
          <div className="about-content" data-aos="fade-right" data-aos-duration="1000">
            <h3>Quality Assurance Automation Engineer</h3>
            <p>
              I'm a Quality Assurance Automation Engineer with 3+ years of experience 
              in test automation, CI/CD pipelines, and quality assurance. I specialize in 
              creating robust testing frameworks and ensuring software quality through 
              comprehensive automation strategies.
            </p>
            <p>
              I've led automation efforts across various applications, achieving 100% test 
              automation coverage and reducing manual testing time by 50%. My expertise 
              spans Playwright, Selenium, Jenkins CI, and API testing.
            </p>
            <div className="about-skills">
              <h4>Key Skills:</h4>
              <ul>
                <li>Test Automation (Playwright, Selenium, Jenkins CI)</li>
                <li>API Testing (Postman, Newman, REST Assured)</li>
                <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
                <li>Programming (Python, JavaScript, CSS, HTML, C)</li>
                <li>Test Strategies (Regression, API, Unit Testing)</li>
                <li>Project Management (Agile, Jira, Scrum)</li>
              </ul>
            </div>
          </div>
          <div className="about-stats" data-aos="fade-left" data-aos-duration="1000">
            <div className="stat-item">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Test Automation</p>
            </div>
            <div className="stat-item">
              <h4>50%</h4>
              <p>Time Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
