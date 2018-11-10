import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item, Grid, Image, Message } from 'semantic-ui-react'

const Recommend = props => {
  // console.log('Recommend', props.movieRecommend);
  const { movieRecommend } = props;
  return (
    <div>
      <Grid>
        {!movieRecommend || movieRecommend.length > 0 ?
          movieRecommend.map(movie => (
            <Grid.Column key={movie.movie_id} width={3}>
              <Image src={movie.image} as={Link} to={`/movieDetail/${movie.movie_id}`} />
              <Link to={`/movieDetail/${movie.movie_id}`}>
                {movie.title}
              </Link>
            </Grid.Column>
          )) :
          <Message
            warning
            header='There are no recommendation at this point.'/>
        }
      </Grid>
      {/* <Item.Group relaxed='very'>
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
      </Item.Group> */}
    </div>
  )
};

export default Recommend;