import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Service from './components/Service';
import Contact from './components/Contact';
function App() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Contact/>
    </div>
  );
}

export default App;
