import React from 'react';
import { Footer } from './containers';
import { CTA, Navbar, Header, WWD } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>

      <WWD></WWD>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
};

export default App;
