
import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Methodology } from './components/Methodology';
import { Filter } from './components/Filter';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Hero />
      <PainPoints />
      <Solution />
      <Benefits />
      <Methodology />
      <Filter />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
