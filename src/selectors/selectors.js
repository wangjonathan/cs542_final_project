export default (movies = [], sortBy) => {
  return movies.sort((a, b) => {
    if (sortBy === 'year') {
      return a.year > b.year ? 1 : -1;
    } else if (sortBy === 'rating') {
      return a.rating < b.rating ? 1 : -1;
    }
  });
};