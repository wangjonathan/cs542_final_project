import { GET_MOVIES, SET_MOVIE_RECOMMEND } from '../actions/actionTypes';

const defaultState = {
  movies: []
};

export default (state = {}, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {

      });
    case 'SET_MOVIES':
      return Object.assign({}, state, {
        movies: action.movies
      });
    case SET_MOVIE_RECOMMEND:
      return Object.assign({}, state, {
        movieRecommend: action.payload
      })
    default:
      return state;
  }
};