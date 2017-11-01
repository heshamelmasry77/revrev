// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };
  render() {
    return (
      <div className="App">
        <Helmet title="You Are Doing Great" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={this.handleClick}>Load</button>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
