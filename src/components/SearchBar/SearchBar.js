import React, { Component } from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies'
class Search extends Component {

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.props.fetchData}
          dynamicSearchStartsFrom={0}
        />
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
      console.log('fetch...');
      dispatch(fetchMovies())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
