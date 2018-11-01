import axios from 'axios';

export function getMovies(text) {
  return {
    type: 'GET_MOVIES'
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
    console.log('fetchMovies');
    axios.get('https://cs542-final-project-server.herokuapp.com/movies', {})
      .then(res => {
        console.log(res);
        dispatch(setMovies(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(setMovies(res));
      })
  }
}