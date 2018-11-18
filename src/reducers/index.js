import { combineReducers } from 'redux';
import authReducer from './authReducer';
import moviesReducer from './movieReducer';
import filterReducer from './filters'
import reviewReducer from './reviewReducer';
import advancedSearchReducer from './advancedSearchReducer';

export default combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  filter: filterReducer,
  review: reviewReducer,
  advancedSearch: advancedSearchReducer
});