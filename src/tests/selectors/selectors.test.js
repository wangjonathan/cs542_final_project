import selectors from '../../selectors/selectors';


const movies = [{
  title: '',
  year: '2017',
  rating: 9
}, {
  title: '',
  year: '2018',
  rating: 10
}];

test('should sort list by year', () => {
  const result = selectors(movies, 'rating');
  console.log(result);
  console.log([movies[1], movies[0]]);
  expect(result).toEqual([movies[0], movies[1]]);
});