import React from 'react';
import { Footer, Blog, Possibility, Features, CNCium } from './containers';
import { CTA, Brand, Navbar, Header } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <CNCium></CNCium>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
