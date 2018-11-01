import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';
import MovieListItem from './MoiveListItem/MovieListItem';
import './MovieList.css';
class MovieList extends Component {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style }) {
    const movie = this.props.movies[index];
    console.log(movie);
    return (
      <div key={key} style={style}>
        <MovieListItem key={movie.movie_id} movie={movie} />
      </div>
    )
  }

  render() {
    const { movies } = this.props;
    return (
      <div className={'SearchResult'}>
        <List width={800} height={800} rowCount={movies.length} rowHeight={300}
          rowRenderer={this.rowRenderer} />
        {/* {!movies || movies.map(movie => {
          return <MovieListItem key={movie.movie_id} movie={movie} />
        })
        } */}
      </div>
    )
  }

};

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
};

export default connect(mapStateToProps)(MovieList);