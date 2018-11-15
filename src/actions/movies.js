import axios from 'axios';
import { SET_USER_MOVIE_RECOMMEND, GET_MOVIE_RECOMMEND, SET_MOVIE_RECOMMEND } from './actionTypes';

var env = process.env.NODE_ENV || 'development';
const ROOT_URL = env === 'production' ? 'https://cs542-final-project-server.herokuapp.com' : 'http://localhost:5000'

export function setUserMovieRecommend(movies) {
  return {
    type: SET_USER_MOVIE_RECOMMEND,
    payload: movies
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
    axios.get(`${ROOT_URL}/movies`, {})
      .then(res => {
        console.log(res);
        dispatch(setMovies(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const fetchMoviesByDirector = (director) => {
  return dispatch => {
    axios.get(`${ROOT_URL}/searchdirector`, {
      params: {
        director
      }
    })
      .then(res => {
        console.log(res);
        dispatch(setMovies(res.data));
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
    axios.get(`${ROOT_URL}/movies/recommend`, {
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

export const fetchMovieRecommendForUser = user_id => {
  return dispatch => {
    axios.get(`${ROOT_URL}/user/recommend`, {
      params: { user_id }
    })
      .then(res => {
        console.log(res);
        dispatch(setUserMovieRecommend(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
} 