// src/App.js
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
