'use client';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
          Skills
        </h2>
        <div className="skills-grid">
          <div className="skill-category" data-aos="fade-up" data-aos-duration="1000">
            <h3>Languages</h3>
            <div className="skill-badges">
              <span className="skill-badge">Python</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">C</span>
            </div>
          </div>
          
          <div className="skill-category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <h3>Automation Tools</h3>
            <div className="skill-badges">
              <span className="skill-badge">Playwright</span>
              <span className="skill-badge">Selenium</span>
              <span className="skill-badge">Postman</span>
              <span className="skill-badge">Newman</span>
            </div>
          </div>
          
          <div className="skill-category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <h3>CI/CD</h3>
            <div className="skill-badges">
              <span className="skill-badge">Jenkins</span>
              <span className="skill-badge">GitHub Actions</span>
            </div>
          </div>
          
          <div className="skill-category" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <h3>Other</h3>
            <div className="skill-badges">
              <span className="skill-badge">Agile</span>
              <span className="skill-badge">Jira</span>
              <span className="skill-badge">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
