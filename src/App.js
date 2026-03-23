import React from 'react';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Vision from './components/Vision';
import Values from './components/Values';
import Admissions from './components/Admissions';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import useReveal from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Splash />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Vision />
        <Values />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}

export default App;
