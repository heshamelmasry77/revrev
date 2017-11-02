import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch } from 'react-router-dom';

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
