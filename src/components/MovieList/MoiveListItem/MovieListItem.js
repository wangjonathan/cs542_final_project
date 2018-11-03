import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const MovieListItem = props => (
  <div>
    <Media key={props.movie.movie_id}>
      <Media.Left>
        <img width={64} height={64} src={props.movie.image} alt="thumbnail" />
      </Media.Left>
      <Media.Body>
        <Media.Heading>
          <Link to={`/movieDetail/${props.movie.movie_id}`}>{props.movie.title}</Link>
        </Media.Heading>
        <p>{props.movie.director}</p>
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={10}
          value={Number(props.movie.rating)}
        />
        {props.movie.rating}/10

      </Media.Body>
    </Media>
  </div>
);

export default MovieListItem;