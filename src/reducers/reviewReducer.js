import { SET_REVIEW, SET_REVIEWS, REVIEW_LOADING } from '../actions/actionTypes';

export default (state = { isLoading: false }, action) => {
  switch (action.type) {
    case SET_REVIEW:
      return Object.assign({}, state, {
        review: action.payload,
      });
    case SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case REVIEW_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    default:
      return state;
  }
};