import React from 'react';
import { Footer, Projects } from './containers';
import { Process, Navbar, Header, WWD, Contact } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>

      <WWD></WWD>
      <Process></Process>
      <Contact></Contact>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default App;
