import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';
import filterReducer from './filters'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { reducer as form } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  loadingBar: loadingBarReducer,
  filter: filterReducer,
  form
});