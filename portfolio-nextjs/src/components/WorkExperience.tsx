'use client';

export default function WorkExperience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="title" data-aos="fade-up" data-aos-duration="1000">
          Work Experience
        </h2>
        <div className="experience-timeline">
          <div className="experience-item" data-aos="fade-right" data-aos-duration="1000">
            <div className="experience-header">
              <h3>Quality Assurance Automation Engineer | Mid-Level (L2)</h3>
              <div className="experience-company">
                <a href="https://c3.ai/" target="_blank" rel="noopener noreferrer" className="company-link">
                  C3 AI
                </a>
              </div>
              <div className="experience-duration">Jan 2025 – Present</div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Plan, scope, and prioritize testing efforts in collaboration with stakeholders to align with product goals</li>
                <li>Enhance and extend automation frameworks, writing maintainable and scalable code to support product features</li>
                <li>Automate test reports and manage test execution through Jenkins CI, leading to a 30% increase in efficiency</li>
                <li>Lead regression testing, project management, and test automation initiatives, reducing defect leakage by 25%</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item" data-aos="fade-left" data-aos-duration="1000">
            <div className="experience-header">
              <h3>Quality Assurance Automation Engineer | Junior Level (L1)</h3>
              <div className="experience-company">
                <a href="https://c3.ai/" target="_blank" rel="noopener noreferrer" className="company-link">
                  C3 AI
                </a>
              </div>
              <div className="experience-duration">Aug 2023 – Jan 2025</div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Led regression and manual testing efforts for various product features, identifying and resolving critical defects</li>
                <li>Increased test coverage by 40% by applying automation best practices and optimizing test suite efficiency</li>
                <li>Collaborated with cross-functional teams to enhance test quality and streamline release cycles</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item" data-aos="fade-right" data-aos-duration="1000">
            <div className="experience-header">
              <h3>Quality Assurance Engineer | Internship</h3>
              <div className="experience-company">
                <a href="https://c3.ai/" target="_blank" rel="noopener noreferrer" className="company-link">
                  C3 AI
                </a>
              </div>
              <div className="experience-duration">Apr 2023 – Aug 2023</div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Executed test cases, reported defects, and verified fixes, contributing to streamlined testing processes</li>
                <li>Documented test results and implemented improvements in testing procedures to optimize efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
