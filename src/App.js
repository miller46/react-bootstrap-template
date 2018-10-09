import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <h1>Body</h1>
        </div>


      </div>
    );
  }
}

export default App;
