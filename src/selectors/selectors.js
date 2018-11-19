const _ = require('lodash');

export default (movies = [], sortBy) => {
  return movies.sort((a, b) => {
    switch (sortBy) {
      case 'title': {
        return a.title > b.title ? 1 : -1;
      }
      case 'year': {
        return a.year < b.year ? 1 : -1;
      }
      case 'rating': {
        return a.rating < b.rating ? 1 : -1;
      }
    }
  });
};

export function filterSelectors(movies = [], filterBy) {
  const { filterByGenre = [], filterByYear = [] } = filterBy;
  let result = movies;
  if ((filterByGenre.length > 0) && (filterByYear.length > 0)) {
    result = movies.filter(movie => {
      // console.log('filterByBoth');
      return (_.intersection(movie.genre, filterByGenre).length > 0) && (_.includes(filterByYear, movie.year));
    });
  } else if ((filterByGenre.length > 0) && (filterByYear.length === 0)) {
    result = movies.filter(movie => {
      // console.log('filterByGenre');
      return (_.intersection(movie.genre, filterByGenre).length > 0);
    });
  } else if ((filterByYear.length > 0) && (filterByGenre.length === 0)) {
    result = movies.filter(movie => {
      // console.log('filterByYear');
      return (_.includes(filterByYear, movie.year));
    });
  }
  return result;
}