import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import store from './store/store';
import { configureFakeBackend } from './utils/fakeBackend';
import { history } from './utils/history';

configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
