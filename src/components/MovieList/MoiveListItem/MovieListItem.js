import React from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'

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
        <Rating icon='star' defaultRating={Number(props.movie.rating)} maxRating={10} disabled />
        {/* {props.movie.rating}/10 */}

      </Media.Body>
    </Media>
    {/* <Item.Group items={items} /> */}
  </div>
);

export default MovieListItem;