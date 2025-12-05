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
                <li>Plan, scope, and prioritize testing efforts in collaboration with stakeholders; lead regression testing and test automation initiatives, reducing defect leakage by 25%.</li>
                <li>Enhance and extend automation frameworks, writing maintainable and scalable code; automate test reports and manage test execution through Jenkins CI, leading to a 30% increase in efficiency.</li>
                <li>Standardized and implemented a <strong>Git-Flow branching strategy</strong> across the shared automation package used by all SaaS application teams, improving release stability and collaboration.</li>
                <li>Designed and implemented an <strong>isolated package architecture</strong> for the test suite using a <strong>composition-based pattern</strong>, improving modularity, reuse, and maintainability across all automated tests.</li>
                <li>Spearhead automation efforts for the <strong>Generative Marketing application</strong> (AI-driven personalized marketing content), achieving 100% automation and reducing manual testing time by 50%.</li>
                <li>Implement Page Object Model (POM), Component Object Model (COM), and graph-based testing strategies, ensuring a 100% pass rate across test cycles.</li>
                <li>Engineer and optimize backend functions to streamline test data generation, decreasing test failures and improving system reliability; champion 'shift-left' testing by integrating automated tests early in the development cycle.</li>
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
                <li>Led regression and manual testing efforts for various product features, identifying and resolving critical defects; increased test coverage by 40% through automation best practices and test suite optimization.</li>
                <li>Orchestrated QA automation for the <strong>Reliability (REL) application</strong>, overseeing patch release approvals and executing thorough regression testing.</li>
                <li>Redesigned the REL repository using a structured POM framework, improving maintainability and eliminating redundancy; executed comprehensive testing and recertification strategies, ensuring smooth releases.</li>
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
