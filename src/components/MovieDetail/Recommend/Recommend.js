import React, { Component } from 'react';
import { Item } from 'semantic-ui-react'

const Recommend = props => {
  console.log('Recommend', props.movieRecommend);
  return (
    <div>
      <Item.Group relaxed='very'>
        {props.movieRecommend.map(movie => (
          <Item>
            <Item.Image size='tiny' src='/images/wireframe/image.png' />

            <Item.Content verticalAlign='middle'>
              <Item.Header as='a'>{`movie_id: ${movie}`}</Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  )
};

export default Recommend;