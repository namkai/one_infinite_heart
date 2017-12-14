import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views';
import { Provider } from 'react-redux';
import history from './history';
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './modules/configureStore';
import 'rxjs';

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
