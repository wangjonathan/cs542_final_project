import { UPDATE_REVIEWS, SET_REVIEWS, REVIEW_LOADING, SET_MODAL_OPEN } from '../actions/actionTypes';

export default (state = { isLoading: false, reviews: [] }, action) => {
  const { reviews } = state;
  let newReviews = reviews.slice(0);
  switch (action.type) {
    case UPDATE_REVIEWS:
      return Object.assign({}, state, {
        reviews: newReviews.map(review => {
          if (review.user_id === action.payload.user_id) {
            return action.payload
          };
          return review;
        })
      });
    case SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case REVIEW_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload
      });
    case SET_MODAL_OPEN:
      return Object.assign({}, state, {
        isModalOpen: action.payload
      });
    default:
      return state;
  }
};