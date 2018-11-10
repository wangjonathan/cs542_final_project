import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';
import filterReducer from './filters'
import reviewReducer from './reviewReducer';
import { loadingBarReducer } from 'react-redux-loading-bar'

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  loadingBar: loadingBarReducer,
  filter: filterReducer,
  review: reviewReducer
});