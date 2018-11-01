import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';
import contextReducer from './contextReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  context: contextReducer,
  loadingBar: loadingBarReducer
});