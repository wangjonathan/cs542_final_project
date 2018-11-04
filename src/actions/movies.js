import axios from 'axios';
import { GET_MOVIES } from './actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function getMovies(text) {
  return {
    type: GET_MOVIES
  }
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function setMovies(movies) {
  return {
    type: 'SET_MOVIES',
    movies
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