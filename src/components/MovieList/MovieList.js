import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'react-virtualized';
import MovieListItem from './MoiveListItem/MovieListItem';
import Select from 'react-select'
import selectors from '../../selectors/selectors';

import './MovieList.css';
import { setFilter } from '../../actions/filters';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: [
        { value: 'year', label: 'Year' },
        { value: 'rating', label: 'Rating' }
      ],
      filterOptions: [
        { value: 'year', label: 'Year' },
        { value: 'rating', label: 'Rating' },
        { value: 'actor', label: 'Actor' }
      ],
      selectedOption: null
    }
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    this.props.setFilter(selectedOption.value);
    // console.log(`Option selected:`, selectedOption);
  }

  rowRenderer({
    key,         // Unique key within array of rows
    index,       // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible,   // This row is visible within the List (eg it is not an overscanned row)
    style }) {
    const movie = this.props.movies[index];
    return (
      <div key={key} style={style}>
        <MovieListItem key={movie.movie_id} movie={movie} />
      </div>
    )
  }

  render() {
    const { options, filterOptions } = this.state;
    const { movies } = this.props;
    return (
      <div className='SearchResult'>
        {!movies ||
          <div>
            <span>Sort By - </span>
            <Select
              className='Select'
              defaultValue={options[0]}
              options={options}
              onChange={this.handleChange}
            />
            <span>Filter By - </span>
            <Select
              className='Select'
              isMulti
              defaultValue={filterOptions[0]}
              options={filterOptions}
              onChange={this.handleChange}
            />
            <br className="clearBoth" />
            {movies.map(movie => (<MovieListItem key={movie.movie_id} movie={movie} />))}
            {/* <List width={1200} height={800} rowCount={movies.length} rowHeight={300}
              rowRenderer={this.rowRenderer} /> */}
          </div>
        }
      </div>
    )
  }

};

const mapStateToProps = state => {
  const { filter } = state.filter;
  return {
    movies: selectors(state.movies.movies, filter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter(value) {
      dispatch(setFilter(value));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);