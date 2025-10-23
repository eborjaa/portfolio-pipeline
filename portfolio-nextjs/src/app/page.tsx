'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Works from '@/components/Works';
import ContactForm from '@/components/ContactForm';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll) library
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        once: true,
      });
    };
    
    initAOS();
  }, []);

  return (
    <div className="portfolio-app">
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <ContactForm />
      </main>
    </div>
  );
}