// @flow
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Routes from './Routes';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';

import './stylesheets/App.css';

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
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={this.handleClick}>Load</button>
        </div>
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
