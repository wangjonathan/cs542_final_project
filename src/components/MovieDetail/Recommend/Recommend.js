import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react'

const Recommend = props => {
  // console.log('Recommend', props.movieRecommend);
  const { movieRecommend } = props;
  return (
    <div>
      <Item.Group relaxed='very'>
        {!movieRecommend || movieRecommend.map(movie => (
          <Item>
            <Item.Image size='tiny' src={movie.image} />

            <Item.Content verticalAlign='middle'>
              <Link to={`/movieDetail/${movie.movie_id}`}>
                <Item.Header>{movie.title}</Item.Header>
              </Link>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  )
};

export default Recommend;