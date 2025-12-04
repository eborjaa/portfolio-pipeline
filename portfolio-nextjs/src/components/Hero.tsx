'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container container-lg">
        <div
          className="hero-content-centered"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <span className="hero-greeting">Hello, I am</span>
          <h1 className="hero-heading">Emmanuel Borja</h1>
          <span className="hero-heading-subtitle">
            SDET
          </span>
          <p className="hero-description">
            Passionate about creating robust testing frameworks, implementing CI/CD pipelines, 
            and ensuring software quality through comprehensive automation strategies.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-white">View My Work</a>
          </div>
          <div className="about-social-list">
            <div className="social-links-row">
              <a href="https://github.com/eborjaa" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/social_icons/github.svg"
                  alt="Link to GitHub account"
                  width={24}
                  height={24}
                />
              </a>
              <a href="https://www.linkedin.com/in/emmanuelborja21/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/social_icons/linkedin.svg"
                  alt="Link to LinkedIn profile"
                  width={24}
                  height={24}
                />
              </a>
              <a href="mailto:emmanuel_borja@hotmail.com">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}