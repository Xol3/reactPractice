import React, { Component } from 'react';
import logo from '../images/naughtyChimps.gif';
import './App.css';
import Test from './test.js';
import Navigation from './navBar.js'

class App extends Component {
  render() {
    return (

      <div className="App">
         <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to codeMonkeyDojo</h1>
        </header>
        <p className="App-intro">
          Pete, Data, Chepe and Pancho working Here!
        </p>
        <Test />
      </div>
    );
  }
}

export default App;
