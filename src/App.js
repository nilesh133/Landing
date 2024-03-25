import React from 'react'
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// components import
import Works from './components/Works/Works';
import Pricing from './components/Pricing/Pricing';
import Accomplishments from './components/Accomplishments/Accomplishments';
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Works />
      <Projects/>
      <Accomplishments/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App