import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { AboutSection, ServicesSection, ContactSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ec] text-[#1c1b1a]">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
