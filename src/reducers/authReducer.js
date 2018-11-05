import { AUTH_USER, UNAUTH_USER, AUTH_ERR, AUTH_LOADING } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.user,
        error: ''
      });
    case UNAUTH_USER:
      return Object.assign({}, state, {
        authenticated: false
      })
    case AUTH_ERR:
      return Object.assign({}, state, {
        error: action.error
      })
    case AUTH_LOADING:
    return Object.assign({}, state, {
      isWaiting: action.isWaiting
    })
    default:
      return state;
  }
};