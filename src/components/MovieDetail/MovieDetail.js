import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  PageHeader,
  Media,
  Badge,
  Image
} from 'react-bootstrap';
import {
  Divider,
  Button,
  Comment,
  Form,
  Header,
  Label,
  Icon
} from 'semantic-ui-react';
import { fetchMovieRecommend } from '../../actions/movies';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    const { id } = props.match.params;
    this.state = {
      movie: props.movies.find(movie => movie.movie_id == id)
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchMovieRecommend(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { movie } = this.state;
    // const movie = this.filterMovie(id);
    // console.log(movie);
    return (
      <div>
        <Header as='h3' dividing>
          {movie.title}
          <small>
            <Badge>{movie.rating}/10</Badge>
          </small>
          <Button as='div' labelPosition='right'>
            <Button color='red'>
              <Icon name='heart' />
              Like
      </Button>
            <Label as='a' basic color='red' pointing='left'>
              2,048
      </Label>
          </Button>
          
        </Header>


        <Image src={movie.image} responsive />;
    <Divider />
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>

          <Comment>
            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Elliot Fu</Comment.Author>
              <Comment.Metadata>
                <div>Yesterday at 12:30AM</div>
              </Comment.Metadata>
              <Comment.Text>
                <p>This has been very useful for my research. Thanks as well!</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
              <Comment>
                <Comment.Avatar src='/images/avatar/small/jenny.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Jenny Hess</Comment.Author>
                  <Comment.Metadata>
                    <div>Just now</div>
                  </Comment.Metadata>
                  <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar src='/images/avatar/small/joe.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Joe Henderson</Comment.Author>
              <Comment.Metadata>
                <div>5 days ago</div>
              </Comment.Metadata>
              <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button content='Add Reply' labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </div >
    )
  }
};

const mapStateToProps = state => {
  const { movies } = state.movies;
  return {
    movies
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