import { SORT_BY_YEAR, SORT_BY_RATING, SET_FILTER } from './actionTypes';

export const setFilter = value => ({
  type: SET_FILTER,
  value
});

export const sortByYear = () => ({
  type: SORT_BY_YEAR
});

export const sortByRating = () => ({
  type: SORT_BY_RATING
});