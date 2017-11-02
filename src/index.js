import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './stylesheets/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Switch>
    <App />
  </Switch>,
  document.getElementById('root')
);
registerServiceWorker();
