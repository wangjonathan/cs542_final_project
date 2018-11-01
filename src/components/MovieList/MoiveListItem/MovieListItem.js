import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const MovieListItem = props => (
  <div>
    <Media key={props.movie.movie_id}>
      <Media left href="#">
        <Media src={props.movie.image} />
      </Media>
      <Media body tag={Link} to={`/movieDetail/${props.movie.movie_id}`}>
        <Media heading>
          {props.movie.title}
        </Media>
        {props.movie.director}
      </Media>
    </Media>
  </div>
);

export default MovieListItem;