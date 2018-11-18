import {
  SET_MOVIE_SEARCH,
  SET_ADVANCED_SEARCH_SORT_BY,
  SET_ADVANCED_SEARCH_FILTER_BY,
  ADVANCED_SEARCH_LOADING,
  SET_ADVANCED_SEARCH_RESULT
} from '../actions/actionTypes';

const initialState = {
  movieSearch: {},
  sortBy: '',
  filterBy: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE_SEARCH:
      return Object.assign({}, state, {
        movieSearch: action.payload
      });
    case SET_ADVANCED_SEARCH_SORT_BY:
      return Object.assign({}, state, {
        sortBy: action.payload
      });
    case SET_ADVANCED_SEARCH_FILTER_BY:
      return Object.assign({}, state, {
        filterBy: action.payload
      });
    case ADVANCED_SEARCH_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    case SET_ADVANCED_SEARCH_RESULT:
    return Object.assign({}, state, {
      result: action.payload
    });
    default:
      return state;
  }
};