import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Media } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.filterMovie = this.filterMovie.bind(this);
  }

  filterMovie(id) {
    console.log(typeof id);
    return this.props.movies.find(movie => movie.movie_id == id);
  }

  render() {
    const { id } = this.props.match.params;
    const movie = this.filterMovie(id);
    console.log(movie);
    return (
      <div>
        <Media key={movie.movie_id}>
          <Media left href="#">
            <Media src={movie.image} />
          </Media>
          <Media body>
            <Media heading>
              {movie.title}
            </Media>
            {movie.director}
            <div>
              <StarRatingComponent
                name="rate2"
                editing={false}
                starCount={10}
                value={Number(movie.rating)}
              />
            </div>
            {movie.year}
            {movie.duration}

          </Media>
        </Media>
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