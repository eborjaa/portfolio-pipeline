'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Works from '@/components/Works';
import WorkExperience from '@/components/WorkExperience';
import ContactForm from '@/components/ContactForm';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="portfolio-app">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Works />
        <WorkExperience />
        <ContactForm />
      </main>
    </div>
  );
}