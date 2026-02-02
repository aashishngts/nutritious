import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import HeroFeatures from '../components/HeroFeatures';

function Home() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <HeroFeatures/>
      <About />
      <Programs />
      <Services />
      <Projects />
      <Steps />
      <Testimonials />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;