import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Item, Grid, Image, Message } from 'semantic-ui-react'

const Recommend = props => {
  const { centered, movieRecommend } = props;
  return (
    <div>
      <Grid padded textAlign={'center'}>
        {movieRecommend && movieRecommend.length > 0 ?
          movieRecommend.map(movie => (
            <Grid.Column key={movie.movie_id} width={3}>
              <Image src={movie.image} as={Link} to={`/movieDetail/${movie.movie_id}`} />
              <Link to={`/movieDetail/${movie.movie_id}`}>
                {movie.title}
              </Link>
            </Grid.Column>
          )) :
          <Message
            compact
            warning
            header='There are no recommendation at this point.' />
        }
      </Grid>
    </div>
  )
};

export default Recommend;