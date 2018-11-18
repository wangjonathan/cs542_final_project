import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Message,
  Form,
  Button,
  Dropdown,
  Menu,
  Grid,
  Accordion
} from 'semantic-ui-react'
import Filter from './Filter';
import SearchForm from './SearchForm/SearchForm';
import MovieList from '../MovieList/MovieList';
import { setSortBy, setFilterBy } from '../../actions/advancedSearch';
import selectors, { filterSelectors } from '../../selectors/selectors';

const autoGenerateOptions = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map(() => (start++))
};

class AdvancedSearch extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSortByClick = this.handleSortByClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.isFilterActivated = this.isFilterActivated.bind(this);
    this.state = {
      isLoading: false,
      filterBy: {
        filterByGenre: [],
        filterByYear: []
      }
    }
  }

  handleSubmit() {
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: true
    //   })
    // }, 3000);

  }

  handleFilterClick(e, { active, name, content }) {
    switch (name) {
      case 'genre': {
        let filterByGenre = this.state.filterBy.filterByGenre.slice(0);
        if (active) {
          filterByGenre = filterByGenre.filter(filter => filter !== content);
        } else
          filterByGenre.push(content);
        this.setState({
          filterBy: Object.assign({}, this.state.filterBy, {
            filterByGenre: filterByGenre
          })
        }, () => {
          console.log(this.state.filterBy)
          this.props.setFilterBy(this.state.filterBy);
        });
        return true;
      }
      case 'year': {
        let filterByYear = this.state.filterBy.filterByYear.slice(0);
        if (active) {
          filterByYear = filterByYear.filter(filter => filter !== content);
        } else
          filterByYear.push(content);
        this.setState({
          filterBy: Object.assign({}, this.state.filterBy, {
            filterByYear: filterByYear
          })
        }, () => {
          console.log(this.state.filterBy)
          this.props.setFilterBy(this.state.filterBy);
        });
        return true;
      }
    }
    // let filterBy = this.state.filterBy.slice(0);
    // if (active) {
    //   filterBy = filterBy.filter(filter => filter !== name);
    // } else
    //   filterBy.push(name);
    // this.setState({ filterBy });
    // this.props.setFilterBy(filterBy);
  };

  handleSortByClick(e, { name }) {
    console.log(name);
    this.setState({
      sortBy: name
    });
    this.props.setSortBy(name);
  }

  isFilterActivated() {
    const { filterBy } = this.state;
    let result = false;
    for (var propertyName in filterBy) {
      result = result || (filterBy[propertyName].length > 0 ? true : false);
    }
    return result;
  }

  render() {
    const { movieSearch, movies } = this.props;
    const { sortBy, filterBy } = this.state;
    const { genres = [], yearStart, yearEnd } = movieSearch;
    const years = (yearStart && yearEnd) ? autoGenerateOptions(yearStart, yearEnd) : [];
    console.log('isFilterActivated', this.isFilterActivated());
    const isFilterActivated = this.isFilterActivated();
    return (
      <div>
        <Container>
          {/* <SearchForm handleSubmit={this.handleSubmit} /> */}
          <Grid centered padded='vertically' divided>
            <Grid.Row>
              <Grid.Column>
                <SearchForm handleSubmit={this.handleSubmit} />
              </Grid.Column>
            </Grid.Row>
            {(movies && movies.length > 0) &&
              <Grid.Row>
                <Grid.Column width={4}>
                  <Filter filterBy={filterBy} genres={genres} years={years} handleFilterClick={this.handleFilterClick} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Menu text>
                    <Menu.Item header>Sort By</Menu.Item>
                    <Menu.Item
                      content='A-Z'
                      name='title'
                      active={sortBy === 'title'}
                      onClick={this.handleSortByClick}
                    />
                    <Menu.Item
                      content='Highest rating'
                      name='rating'
                      active={sortBy === 'rating'}
                      onClick={this.handleSortByClick}
                    />
                    <Menu.Item
                      content='Latest'
                      name='year'
                      active={sortBy === 'year'}
                      onClick={this.handleSortByClick}
                    />
                  </Menu>
                  <MovieList movies={movies} sortBy={sortBy} filterBy={filterBy} />
                </Grid.Column>
              </Grid.Row>
            }
            {/* {(movies && movies.length === 0) &&
              <Grid.Row>
                <Message warning content={'No movie match your search'} />
              </Grid.Row>
            } */}
          </Grid>
        </Container>
      </div>
    )
  }
};

const mapStateToProps = state => {
  const { movieSearch, result, sortBy, filterBy } = state.advancedSearch;
  return {
    movieSearch,
    movies: result ? filterSelectors(selectors(result, sortBy), filterBy) : null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setSortBy(sortBy) {
      dispatch(setSortBy(sortBy));
    },
    setFilterBy(filterBy) {
      dispatch(setFilterBy(filterBy));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);
