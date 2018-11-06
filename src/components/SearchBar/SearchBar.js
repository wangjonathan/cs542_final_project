import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies'
import Select from 'react-select';
import SearchFilter from './SearchFilter';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      // options: [
      //   { value: 'Title', label: 'Title' },
      //   { value: 'Director', label: 'Director' },
      //   { value: 'Genre', label: 'Genre' },
      //   { value: 'Actor', label: 'Actor' }
      // ],
      isOpen: false,
      activeDropdown: 'Search by...',
      "isLoading": false,
      "results": [],
      "value": ""
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) {
    console.log(result);
    this.setState({ value: result.title })
  }

  handleSearchChange(e, { value }) {
    // console.log(value);
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.movies.map(movie => Object.assign({}, movie, {
          title: `${movie.title}(${movie.year})`,
          description: movie.director
        })), isMatch),
      })
    }, 300)
  }

  render() {
    const { options, isLoading, value, results } = this.state;
    const { movies } = this.props;
    return (
      <div >
        <Search
          fluid
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={this.handleSearchChange}
          results={results}
          value={value}
        />
        {/* <Search.Results>
          {!movies || movies.map(result => <Search.Result onClick={result => console.log(result.title)}></Search.Result>)}
          <div />
        </Search.Results> */}
        {/* </Search> */}
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
