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
            <h3>SDET & Software Developer</h3>
            <p>
              I'm a passionate Software Development Engineer in Test with expertise in 
              automation testing, CI/CD pipelines, and modern web development. I specialize 
              in creating robust testing frameworks and ensuring software quality through 
              comprehensive test automation.
            </p>
            <p>
              With experience in Playwright, Selenium, API testing, and Jenkins pipelines, 
              I help teams deliver high-quality software through effective testing strategies 
              and continuous integration practices.
            </p>
            <div className="about-skills">
              <h4>Key Skills:</h4>
              <ul>
                <li>Test Automation (Playwright, Selenium, Cypress)</li>
                <li>API Testing (Postman, Newman, REST Assured)</li>
                <li>CI/CD Pipelines (Jenkins, GitHub Actions)</li>
                <li>Frontend Development (React, Next.js, TypeScript)</li>
                <li>Backend Development (Node.js, Python, Java)</li>
                <li>Quality Assurance & Testing Strategies</li>
              </ul>
            </div>
          </div>
          <div className="about-stats" data-aos="fade-left" data-aos-duration="1000">
            <div className="stat-item">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Test Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
