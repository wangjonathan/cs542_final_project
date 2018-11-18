export const categoryOptions = [{
  text: 'movie',
  value: 'movie'
}, {
  text: 'review',
  value: 'review'
}];

export const sortByOptions = [{
  text: 'rating',
  value: 'rating'
}, {
  text: 'year',
  value: 'year'
}];

let yearStart = 1991;
let yearEnd = 2016;

export const yearOptions = Array(yearEnd - yearStart + 1)
  .fill()
  .map(() => ({
    text: yearStart,
    value: yearStart++
  }));

let ratingStart = 1;
let ratingEnd = 10;

export const ratingOptions = Array(ratingEnd - ratingStart + 1)
  .fill()
  .map(() => ({
    text: ratingStart,
    value: ratingStart++
  }));

// export const genreOptions = [
//   { value: 'Romance', key: 'Romance', text: 'Romance' },
//   { value: 'Mystery', key: 'Mystery', text: 'Mystery' },
//   { value: 'Musical', key: 'Musical', text: 'Musical' },
//   { value: 'Fantasy', key: 'Fantasy', text: 'Fantasy' },
//   { value: 'Drama', key: 'Drama', text: 'Drama' },
//   { value: 'Horror', key: 'Horror', text: 'Horror' },
//   { value: 'Biography', key: 'Biography', text: 'Biography' },
//   { value: 'Action', key: 'Action', text: 'Action' },
//   { value: 'Thriller', key: 'Thriller', text: 'Thriller' },
//   { value: 'Sci-Fi', key: 'Sci-Fi', text: 'Sci-Fi' },
//   { value: 'Comedy', key: 'Comedy', text: 'Comedy' },
//   { value: 'Adventure', key: 'Adventure', text: 'Adventure' },
//   { value: 'War', key: 'War', text: 'War' },
//   { value: 'Family', key: 'Family', text: 'Family' },
//   { value: 'Animation', key: 'Animation', text: 'Animation' },
//   { value: 'Crime', key: 'Crime', text: 'Crime' },
// ];