import { SET_USER_MOVIE_RECOMMEND, SET_MOVIE_RECOMMEND } from '../actions/actionTypes';

const defaultState = {
  movies: []
};

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_MOVIE_RECOMMEND:
      return Object.assign({}, state, {
        userMovieRecommend: action.payload
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