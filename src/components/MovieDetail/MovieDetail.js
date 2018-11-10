import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Badge
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
  Item,
  Rating,
  List
} from 'semantic-ui-react';
import Moment from 'moment'

import Review from './Review/Review';
import Recommend from './Recommend/Recommend';

import { fetchMovieRecommend } from '../../actions/movies';
import { setReviews, addReview, fetchReviewByMovie } from '../../actions/review';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleReviewSubmit = this.handleReviewSubmit.bind(this);
    const { id } = props.match.params;
    this.state = {
      movie: props.movies.find(movie => movie.movie_id == id),
      review: '',
      rating: 0
    }
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieRecommend(id);
    this.props.fetchReviewByMovie(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      // console.log('update');
      const { id } = this.props.match.params;
      this.props.fetchMovieRecommend(id);
      this.props.fetchReviewByMovie(id);
    }

  }

  handleRatingChange(e, { rating }) {
    // console.log(rating);
    this.setState(Object.assign({}, this.state, {
      rating
    }));
  }

  handleTextAreaChange(e) {
    this.setState(Object.assign({}, this.state, {
      review: e.target.value
    }));
  }

  handleReviewSubmit() {
    const { user, reviews, setReviews } = this.props;
    const { movie, rating, review } = this.state;
    const newReview = {
      user_id: user.user_id,
      movie_id: movie.movie_id,
      review,
      rating,
      date: Moment(Date.now()).format('MM/DD/YYYY')
    };
    this.props.addReview(newReview);
    const cloneReviews = reviews.slice(0)
    cloneReviews.push(Object.assign({}, newReview, {
      username: user.username
    }));
    this.props.setReviews(cloneReviews);
    this.setState({
      rating: 0,
      review: ''
    })
  }

  // componentDidUpdate() {
  //   const { id } = this.props.match.params;
  //   this.props.fetchMovieRecommend(id);
  // }

  render() {
    const { id } = this.props.match.params;
    const { review, rating } = this.state;
    const { user, authenticated, isLoading, reviews } = this.props;
    const movie = this.props.movies.find(movie => movie.movie_id == id);
    const panes = [
      {
        menuItem: 'Review', render: () =>
          <Tab.Pane attached={false}>
            <Review
              review={review}
              rating={rating}
              reviews={reviews}
              user={user}
              authenticated={authenticated}
              isLoading={isLoading}
              handleTextAreaChange={this.handleTextAreaChange}
              handleReviewSubmit={this.handleReviewSubmit}
              handleRatingChange={this.handleRatingChange}
            />
          </Tab.Pane>
      },
      {
        menuItem: 'Recommend', render: () => <Tab.Pane attached={false}><Recommend movieRecommend={this.props.movieRecommend} /></Tab.Pane>
      },
    ];
    return (
      <div>

        <Container className='container'>
          <Header as='h1' dividing>
            {`${movie.title} (${movie.year})`}
            <small>
              <Rating icon='star' defaultRating={1} /><Badge>{movie.rating}/10</Badge>
            </small>
            {/* <Button as='div' labelPosition='right' size='tiny'>
              <Button color='red'>
                <Icon name='heart' />
                Like
            </Button>
              <Label as='a' basic color='red' pointing='left'>
                2,048
             </Label>
            </Button> */}

          </Header>
          <Item.Group relaxed>
            <Item>
              <Item.Image src={movie.image} />
              <Item.Content floated='right' verticalAlign='top'>
                {/* <Item.Header>{movie.title}</Item.Header> */}
                <Item.Meta>Genre</Item.Meta>
                <Item.Description>
                  <List celled horizontal>
                    {movie.genre.map(actor => <List.Item key={actor.genre}>{actor.genre}</List.Item>)}
                  </List>
                </Item.Description>
                <Item.Meta>Director</Item.Meta>
                <Item.Description>
                  {movie.director}
                </Item.Description>
                <Item.Meta>Actor</Item.Meta>
                <Item.Description>
                  <List celled horizontal>
                    {movie.actor.map(actor => <List.Item key={actor.actor_name}>{actor.actor_name}<br /></List.Item>)}
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
              </Item.Content>
            </Item>
          </Item.Group>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>

      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movies, movieRecommend } = state.movies;
  const { user, authenticated } = state.auth;
  const { reviews, isLoading } = state.review;
  return {
    movies,
    movieRecommend,
    user,
    reviews,
    authenticated,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieRecommend(movie_id) {
      dispatch(fetchMovieRecommend(movie_id));
    },
    fetchReviewByMovie(movie_id) {
      dispatch(fetchReviewByMovie(movie_id));
    },
    addReview(newReview) {
      dispatch(addReview(newReview));
    },
    setReviews(reviews) {
      dispatch(setReviews(reviews));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);