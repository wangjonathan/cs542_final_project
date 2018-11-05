import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERR } from './actionTypes';
import history from '../history/history';

export function authUser(user) {
  return {
    type: AUTH_USER,
    user
  }
}

export function signoutUser() {
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

export const signupUser = (newUser) => {
  return dispatch => {
    // dispatch(showLoading());
    axios.post(`${process.env.ROOT_URL}/signup`, newUser)
      .then(res => {
        console.log(res);
        // dispatch(setMovies(res.data));
        // dispatch(hideLoading());

        localStorage.setItem('token', res.data.token);
        dispatch(authUser(res.data.user));
        history.push('/')
      })
      .catch(err => {
        console.log(err);
        // dispatch(authError(err.response.data.error));
      })
  }
}

export const signinUser = ({ email, password }) => {
  return dispatch => {
    // dispatch(showLoading());
    axios.post(`${process.env.ROOT_URL}/signin`, { email, password })
      .then(res => {
        console.log(res);
        // dispatch(setMovies(res.data));
        // dispatch(hideLoading());

        localStorage.setItem('token', res.data.token);
        dispatch(authUser(res.data.user));
        history.push('/')
      })
      .catch(err => {
        // console.log(err.response.data);
        dispatch(authError(err.response.data));
      })
  }
}