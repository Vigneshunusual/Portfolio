/**
 * Home Page
 * Assembles all sections in order.
 * This is the single page portfolio.
 */
import React from 'react';
import Hero     from '../components/Hero';
import About    from '../components/About';
import Experience   from '../components/Experience';
import Projects from '../components/Projects';
import TechStack  from '../components/TechStack';
import Footer   from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero     />
      <About    />
      <Experience   />
      <Projects />
      <TechStack  />
      <Footer   />
    </main>
  );
}
