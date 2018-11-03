import { SET_FILTER, SORT_BY_RATING, SORT_BY_YEAR } from '../actions/actionTypes'
// Filters Reducer

const filtersReducerDefaultState = {
  sortBy: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.value
      });
    case SORT_BY_YEAR:
      return Object.assign({}, state, {
        sortBy: 'year'
      });
    case SORT_BY_YEAR:
      return Object.assign({}, state, {
        sortBy: 'rating'
      });
    default:
      return state;
  }
};
