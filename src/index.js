import React from 'react';
import { render } from 'react-snapshot';
import { BrowserRouter as Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

render(
  <Switch>
    <App />
  </Switch>,
  document.getElementById('root')
);
