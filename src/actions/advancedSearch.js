import {
  SET_MOVIE_SEARCH,
  SET_ADVANCED_SEARCH_SORT_BY,
  SET_ADVANCED_SEARCH_FILTER_BY,
  ADVANCED_SEARCH_LOADING,
  SET_ADVANCED_SEARCH_RESULT
} from './actionTypes';

export function setMovieSearch(movieSearch) {
  return {
    type: SET_MOVIE_SEARCH,
    payload: movieSearch
  }
};

export function setMovieSearchResult(result) {
  return {
    type: SET_ADVANCED_SEARCH_RESULT,
    payload: result
  }
};

export function setSortBy(sortBy) {
  return {
    type: SET_ADVANCED_SEARCH_SORT_BY,
    payload: sortBy
  }
};

export function setFilterBy(filterBy) {
  return {
    type: SET_ADVANCED_SEARCH_FILTER_BY,
    payload: filterBy
  }
};

export function isAdvancedSearchLoading(isLoading) {
  return {
    type: ADVANCED_SEARCH_LOADING,
    payload: isLoading
  }
};