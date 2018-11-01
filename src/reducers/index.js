import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer
});