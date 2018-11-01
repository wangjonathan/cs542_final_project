import { GET_MOVIES } from '../actions/actionTypes';

const defaultState = {
  movies: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {

      });
    case 'SET_MOVIES':
      return Object.assign({}, state, {
        movies: action.movies
      });
    default:
      return state;
  }
};