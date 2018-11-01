import React from 'react';
import { Media } from 'reactstrap';

const MovieListItem = props => (
  <div>
    <Media key={props.movie.moive_id}>
      <Media left href="#">
        <Media object src={props.movie.image} data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {props.movie.title}
        </Media>
        {props.movie.director}
      </Media>
    </Media>
  </div>
);

export default MovieListItem;