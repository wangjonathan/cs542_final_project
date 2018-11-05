import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

import { authUser } from './actions/auth';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

const token = localStorage.getItem('token');
// console.log(token);
if (token) {
  // store.dispatch(authUser);
}

var env = process.env.NODE_ENV || 'development';
console.log(process.env);
// if (env === 'development' || env === 'test') {
//   require('../config/config');
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);