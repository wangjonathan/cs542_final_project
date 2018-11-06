import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PageHeader,
  Media,
  Badge,
  Image
} from 'react-bootstrap';
import {
  Container,
  Divider,
  Button,
  Comment,
  Form,
  Header,
  Label,
  Icon,
  Tab,
  Item
} from 'semantic-ui-react';

import Review from './Review/Review';
import Recommend from './Recommend/Recommend';

import { fetchMovieRecommend } from '../../actions/movies';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    const { id } = props.match.params;
    this.state = {
      movie: props.movies.find(movie => movie.movie_id == id)
    }
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieRecommend(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      console.log('update');
      const { id } = this.props.match.params;
      this.props.fetchMovieRecommend(id);
    }

  }

  // componentDidUpdate() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchMovieRecommend(id);
  // }

  render() {
    const { id } = this.props.match.params;
    const movie = this.props.movies.find(movie => movie.movie_id == id)
    const panes = [
      { menuItem: 'Review', render: () => <Tab.Pane attached={false}><Review /></Tab.Pane> },
      { menuItem: 'Recommend', render: () => <Tab.Pane attached={false}><Recommend movieRecommend={this.props.movieRecommend} /></Tab.Pane> },
    ];
    return (
      <div>

        <Container className='container'>
          <Header as='h1' dividing>
            {movie.title}
            <small>
              <Badge>{movie.rating}/10</Badge>
            </small>
            <Button as='div' labelPosition='right' size='tiny'>
              <Button color='red'>
                <Icon name='heart' />
                Like
          </Button>
              <Label as='a' basic color='red' pointing='left'>
                2,048
             </Label>
            </Button>

          </Header>
          <Item.Group relaxed>
            <Item>
              <Item.Image src={movie.image} />

              <Item.Content floated='right' verticalAlign='top'>
                <Item.Header>{movie.title}</Item.Header>
                <Item.Meta>Genre</Item.Meta>
                <Item.Description>
                  {movie.genre.map(actor => <span key={actor.genre}>{actor.genre}<br /></span>)}
                </Item.Description>
                <Item.Meta>Director</Item.Meta>
                <Item.Description>
                  {movie.director}
                </Item.Description>
                <Item.Meta>Actor</Item.Meta>
                <Item.Description>
                  {movie.actor.map(actor => <span key={actor.actor_name}>{actor.actor_name}<br /></span>)}
                </Item.Description>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  {movie.description}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>

        {/* <Image src={movie.image} responsive />; */}
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movies, movieRecommend } = state.movies;
  return {
    movies,
    movieRecommend
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieRecommend(movie_id) {
      dispatch(fetchMovieRecommend(movie_id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);