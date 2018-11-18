import React from 'react';
import { Link } from 'react-router-dom';
import {
  Item,
  List,
  Rating
} from 'semantic-ui-react'

const MovieListItem = props => {
  const { movie, children, compact = false } = props;
  return (
    <Item key={movie.movie_id}>
      <Item.Image src={movie.image} />
      <Item.Content floated='right' verticalAlign='middle'>
        {children}
        {compact ||
          <div>
            <Item.Meta>Genre</Item.Meta>
            <Item.Description>
              <List celled horizontal>
                {movie.genre && movie.genre.map(genre => <List.Item key={genre}>{genre}</List.Item>)}
              </List>
            </Item.Description>
            <Item.Meta>Director</Item.Meta>
            <Item.Description>
              {movie.director}
            </Item.Description>
            <Item.Meta>Actor</Item.Meta>
            <Item.Description>
              <List celled horizontal>
                {movie.actor && movie.actor.map(actor => <List.Item key={actor}>{actor}<br /></List.Item>)}
              </List>
            </Item.Description>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              {movie.description}
            </Item.Description>
            <Item.Meta>Duration</Item.Meta>
            <Item.Description>
              {movie.duration} mins
            </Item.Description>
          </div>
        }
      </Item.Content>
    </Item>
  )
}

export default MovieListItem;