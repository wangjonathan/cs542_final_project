import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Image,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Recommend from '../MovieDetail/Recommend/Recommend';
import MoviesRank from '../MoviesRank/MoviesRank';
import Avengers from '../../../image/avengers-infinity-war-movie-poster-international.png';
import GoG from '../../../image/guardians-of-the-galaxy-2.png';
import { fetchMovieRecommendForUser } from '../../actions/movies';

import './home.css';
class Home extends Component {

  componentDidMount() {
    if (this.props.user)
      this.props.fetchMovieRecommendForUser(this.props.user.user_id);
  }

  componentDidUpdate(prevProps) {
    const { authenticated } = this.props;
    if (authenticated === true && prevProps.authenticated !== authenticated) {
      const { user } = this.props;
      this.props.fetchMovieRecommendForUser(user.user_id);
    }

  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerMode: true
    };
    const { authenticated, user } = this.props;
    return (
      <div>
        <Container>
          <Grid>
            <Grid.Column floated='left' width={4}>
              <Carousel>
                <Carousel.Item>
                  <Link to={`/movieDetail/${95}`}>
                    <img width={1095} height={500} alt="900x500" src={GoG} />
                  </Link>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Link to={`/movieDetail/${17}`}>
                    <img width={1095} height={500} alt="900x500" src={Avengers} />
                  </Link>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1095} height={500} alt="900x500" src={GoG} />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Grid.Column>
            <Grid.Column floated='right' width={7}>
              <MoviesRank />
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Image src='/images/wireframe/media-paragraph.png' />
            </Grid.Column> */}
          </Grid>
          {!authenticated ||
            <div>
              <Header attached='top'>
                Recommend Movies Just for {user.username}
              </Header>
              <Segment attached>
                <Recommend movieRecommend={this.props.userMovieRecommend} />
              </Segment></div>
          }

        </Container>

        {/* <Segment vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header as='h4' content='Services' />
                  <List link>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4'>
                    Footer Header
              </Header>
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage users.
              </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment> */}
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { movies, userMovieRecommend } = state.movies;
  const { authenticated, user } = state.auth;
  return {
    movies,
    userMovieRecommend,
    user,
    authenticated
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovieRecommendForUser(user_id) {
      dispatch(fetchMovieRecommendForUser(user_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);