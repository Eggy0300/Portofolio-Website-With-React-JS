import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/main.css"
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Experience from './components/expe/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
        <Home />
        <About />
        <Skill />
        <Experience />
        <Contact />
        <Footer />
    </main>
    </>
  )
}

export default App;
