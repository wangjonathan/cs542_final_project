import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERR, AUTH_LOADING } from './actionTypes';
import history from '../history/history';
import { setUserMovieRecommend } from './movies'

var env = process.env.NODE_ENV || 'development';
const ROOT_URL = env === 'production' ? 'https://cs542-final-project-server.herokuapp.com' : 'http://localhost:5000'

export function authUser(user) {
  return {
    type: AUTH_USER,
    user
  }
}

export function unauthUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER
  }
};

export function authError(error) {
  return {
    type: AUTH_ERR,
    error
  }
};

export function authLoading(isWaiting) {
  return {
    type: AUTH_LOADING,
    isWaiting
  }
};

export const signupUser = (newUser) => {
  return dispatch => {
    dispatch(authLoading('true'));
    axios.post(`${ROOT_URL}/signup`, newUser)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch(authUser(res.data.user));
        dispatch(authLoading('false'));
        history.push('/');
      })
      .catch(err => {
        console.log(err);
        dispatch(authError(err.response.data.error));
        dispatch(authLoading('false'));
      })
  }
}

export const signinUser = ({ email, password }) => {
  return dispatch => {
    dispatch(authLoading('true'));
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data.token);
        dispatch(authUser(res.data.user));
        dispatch(authLoading('false'));
        // history.push('/')
        history.goBack();
      })
      .catch(err => {
        // console.log(err.response.data);
        dispatch(authError(err.response.data));
        dispatch(authLoading('false'));
      })
  }
};

export function signoutUser() {
  return dispatch => {
    dispatch(setUserMovieRecommend([]));
    dispatch(unauthUser());
  }
};