import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Drum from "./components/Drum";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
      <Drum/>
      <Footer/>
        {/* <Header />
        <Drum />
        <Footer/> */}

      </div>
    );
  }
}

export default App;
