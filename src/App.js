import React from 'react';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Team from './components/Team/Team';

const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Team />
        <Blog />
        <Contact />
      <p style={{ marginBottom: 5, textAlign: 'center', }}>This website is made by <b style={{ fontSize: 18 }}>Adhipatya Saxena</b>. <i>The Sanskaar Valley School.</i></p>
    </>
  )
}

export default App

