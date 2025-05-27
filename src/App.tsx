import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Committees from './components/Committees';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import Faculty from './components/Faculty';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Committees />
          <Schedule />
          <Registration />
          <Faculty />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;