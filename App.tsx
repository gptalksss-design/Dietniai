
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'terms' | 'privacy'>('home');

  const navigateTo = (newView: 'home' | 'terms' | 'privacy') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navbar onHomeClick={() => navigateTo('home')} />
      <main>
        {view === 'home' && (
          <>
            <section id="hero">
              <Hero />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="how-it-works">
              <HowItWorks />
            </section>
            <section id="about">
              <About />
            </section>
          </>
        )}
        {view === 'terms' && <TermsOfUse />}
        {view === 'privacy' && <PrivacyPolicy />}
      </main>
      <Footer 
        onTermsClick={() => navigateTo('terms')} 
        onPrivacyClick={() => navigateTo('privacy')}
      />
    </div>
  );
};

export default App;
