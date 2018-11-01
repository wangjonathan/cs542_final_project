import { TOGGLE_SPINNER } from '../actions/actionTypes';

const initialState = {
  isSpinnerActive: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SPINNER:
      return Object.assign({}, state, {
        isSpinnerActive: action.isSpinnerActive
      });
    default:
      return state;
  }
};