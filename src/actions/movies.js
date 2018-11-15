import axios from 'axios';
import { GET_MOVIES, GET_MOVIE_RECOMMEND, SET_MOVIE_RECOMMEND } from './actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function getMovies(text) {
  return {
    type: GET_MOVIES
  }
}

export function setMovies(movies) {
  return {
    type: 'SET_MOVIES',
    movies
  }
}

export function setMovieRecommend(movieRecommend) {
  return {
    type: SET_MOVIE_RECOMMEND,
    payload: movieRecommend
  }
}

export const fetchMovies = () => {
  return dispatch => {
    dispatch(showLoading());
    axios.get('https://cs542-final-project-server.herokuapp.com/movies', {})
      .then(res => {
        console.log(res);
        dispatch(setMovies(res.data));
        dispatch(hideLoading());
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchMoviesByDirector = (director) => {
  return dispatch => {
    dispatch(showLoading());
    axios.get('https://cs542-final-project-server.herokuapp.com/searchdirector', {
      params: {
        director
      }
    })
      .then(res => {
        console.log(res);
        dispatch(setMovies(res.data));
        dispatch(hideLoading());
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchMovieRecommend = movie_id => {
  return dispatch => {
    // dispatch(showLoading());
    // console.log('fetchRecommend');
    axios.get('https://cs542-final-project-server.herokuapp.com/movies/recommend', {
      params: { movie_id }
    })
      .then(res => {
        console.log(res);
        dispatch(setMovieRecommend(res.data));
        // dispatch(hideLoading());
      })
      .catch(err => {
        console.log(err);
      })
  }
} 