import React from 'react';
import { connect } from 'react-redux';

import MovieListItem from './MoiveListItem/MovieListItem';

const MovieList = props => {
  const { movies } = props;
  return (
    <div>
      {!movies || movies.map(movie => {
        return <MovieListItem key={movie.movie_id} movie={movie} />
      })
      }
    </div>
  )
};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
};

export default connect(mapStateToProps)(MovieList);