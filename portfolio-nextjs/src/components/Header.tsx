'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header" className="header">
      <div className="container container-lg">
        <div className="header-nav">
          <a
            href="#home"
            className="logo"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Emmanuel Borja
          </a>
          <nav id="nav" className="nav">
            <ul 
              className={`nav-list ${isMenuOpen ? 'nav-list-open' : ''}`}
              data-aos="fade-down" 
              data-aos-duration="1000"
            >
              <li className="nav-item">
                <a href="#home" className="nav-link active">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link">Experience</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
            <button id="nav-btn" className="nav-btn" onClick={toggleMenu}>
              <Image
                id="nav-btn-img"
                src="/img/icons/open.svg"
                alt="Navigation button"
                width={24}
                height={24}
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
