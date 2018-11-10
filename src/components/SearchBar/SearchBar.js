import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesByDirector } from '../../actions/movies'
import Select from 'react-select';
import {
  Search,
  Grid,
  Header,
  Segment,
  Dropdown,
  Popup,
  Rating
} from 'semantic-ui-react'
import history from '../../history/history';

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: 'Search by...',
      "isLoading": false,
      "results": [],
      "value": ""
    };
  }

  // componentDidMount() {
  //   this.props.fetchMovies();
  //   // this.props.fetchMoviesByDirector();
  // }

  render() {
    const { isLoading, value, results, handleResultSelect, handleSearchChange } = this.props;
    return (
      <div >
        <Search
          fluid
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={handleSearchChange}
          onFocus={handleSearchChange}
          results={results}
          value={value}
        />
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movies } = state;
  return {
    movies: movies.movies
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
    fetchMoviesByDirector: director => {
      dispatch(fetchMoviesByDirector(director))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
