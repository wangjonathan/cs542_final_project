import React, { Component } from 'react';
import SearchBar from '@opuscapita/react-searchbar';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movies'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar'
import SearchFilter from './SearchFilter';
class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.props.fetchData}
          dynamicSearchStartsFrom={0}
        />
        Search By: <SearchFilter />
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
