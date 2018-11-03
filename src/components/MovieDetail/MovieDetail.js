import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  PageHeader, 
  Media, 
  Badge,
  Image
} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.filterMovie = this.filterMovie.bind(this);
  }

  filterMovie(id) {
    return this.props.movies.find(movie => movie.movie_id == id);
  }

  render() {
    const { id } = this.props.match.params;
    const movie = this.filterMovie(id);
    // console.log(movie);
    return (
      <div>
        <PageHeader>
          {movie.title}
          <small>
            <Badge>{movie.rating}/10</Badge>
            {/* <Star
             */}
          </small>
        </PageHeader>
        <Image src={movie.image} responsive />;
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movies } = state.movies;
  return {
    movies
  }
}
export default connect(mapStateToProps)(MovieDetail);