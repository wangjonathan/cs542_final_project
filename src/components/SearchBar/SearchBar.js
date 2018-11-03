import React, { Component } from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies'
import LoadingBar from 'react-redux-loading-bar'
import Select from 'react-select';
import SearchFilter from './SearchFilter';

import './SearchBar.css';
class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: [
        { value: 'Title', label: 'Title' },
        { value: 'Director', label: 'Director' },
        { value: 'Genre', label: 'Genre' },
        { value: 'Actor', label: 'Actor' }
      ],
      selectedOption: null
    };
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { options } = this.state;
    return (
      <div >
        <div className='SearchBar'>
          <SearchBar
            onSearch={this.props.fetchData}
            dynamicSearchStartsFrom={0}
          />
          <Select
            className='DropdownList'
            defaultValue={options[0]}
            options={options}
            onChange={this.handleChange}
          />
        </div>
        {/* <SearchFilter /> */}
        <LoadingBar />
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchMovies());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
