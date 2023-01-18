
import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/Qualification/Qualification';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';
function App() {
  return (<>
  
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Contact />
      
    </main>

    <Footer />
    <ScrollUp />
  </>
  );
}

export default App;
