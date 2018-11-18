import React from 'react';
import { Link } from 'react-router-dom';
import {
  Item,
  Rating,
  Message
} from 'semantic-ui-react';
import MovieListItem from './MoiveListItem/MovieListItem';
import './MovieList.css';

const MovieList = props => {
  const { movies } = props;
  return (
    <div className='SearchResult'>
      {!movies || (movies.length > 0) ?
        <div>
          <Item.Group relaxed divided>
            {movies.map((movie, index) => (
              <MovieListItem key={movie.movie_id} movie={movie}>
                <Item.Header>
                  <Link to={`/movieDetail/${movie.movie_id}`}>{movie.title}</Link>
                </Item.Header>
                <Item.Meta><Rating icon='star' defaultRating={1} disabled />{movie.rating}</Item.Meta>
              </MovieListItem>))}
          </Item.Group>

        </div>
        :
        <Message warning content={'No movie match your filter'} />
        }
    </div>
  )
};

export default MovieList;