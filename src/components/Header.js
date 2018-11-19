const _ = require('lodash');
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import {
  Search,
  Grid,
  Header,
  Segment,
  Image,
  Dropdown,
  Icon
} from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';
import history from '../history/history';
import SearchBar from './SearchBar/SearchBar';
import { signoutUser } from '..//actions/auth';
import { fetchMovies, fetchMovieGenres } from '../actions/movies';

import './SearchBar/SearchBar.css';
import Logo from '../../image/popcorn.png';

class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.handeleDropdownChange = this.handeleDropdownChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.resetComponent = this.resetComponent.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      searchBy: 'title',
      sortBy: 'sort by',
      isLoading: false,
      results: null,
      value: "",
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchMovieGenres();
  }

  onChangeDropdown(evt) {
    this.setState({ searchBy: evt })
  }

  sortBy() {
    const { results, sortBy } = this.state;

    switch (sortBy) {
      case 'title ascending': {
        this.setState({
          results: _.orderBy(results, ['title'], ['asc'])
        });
        break;
      }
      case 'title descending': {
        this.setState({
          results: _.orderBy(results, ['title'], ['desc'])
        });
        break;
      }
      case 'lowest gross': {
        this.setState({
          results: _.orderBy(results, ['gross'], ['asc'])
        });
        break;
      }
      case 'highest gross': {
        this.setState({
          results: _.orderBy(results, ['gross'], ['desc'])
        });
        break;
      }
      case 'lowest rating': {
        this.setState({
          results: _.orderBy(results, ['rating'], ['asc'])
        });
        break;
      }
      case 'highest rating': {
        this.setState({
          results: _.orderBy(results, ['rating'], ['desc'])
        });
        break;
      }
      case 'shortest duration': {
        this.setState({
          results: _.orderBy(results, ['duration'], ['asc'])
        });
        break;
      }
      case 'longest duration': {
        this.setState({
          results: _.orderBy(results, ['duration'], ['desc'])
        });
        break;
      }
      case 'oldest': {
        this.setState({
          results: _.orderBy(results, ['year', 'title'], ['asc', 'asc'])
        });
        break;
      }
      case 'newest': {
        this.setState({
          results: _.orderBy(results, ['year', , 'title'], ['desc', 'asc'])
        });
        break;
      }
    }
  }

  handleSortByChange(evt) {
    this.setState({
      sortBy: evt
    });
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) {
    history.push(`/movieDetail/${result.movie_id}`)
    this.setState({ value: result.title })
    this.resetComponent();
  }

  handleSearchChange(e, { value }) {
    // console.log(value);
    const { searchBy } = this.state;

    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      var isMatch = result => {
        if (searchBy === 'actor') {
          console.log('result', result);
          if (result[searchBy].find(actor => re.test(actor)))
            return true;
          return false;
        }
        return re.test(result[searchBy])
      }

      // let movies = (this.state.results === null) ? this.props.movies : this.state.results;
      let sortedResults = _.filter(this.props.movies.map(movie => Object.assign({}, movie, {
        title: `${movie.title}`,
        description: movie.director
      })), isMatch);

      this.setState({
        isLoading: false,
        results: sortedResults,
      }, () => this.sortBy());
    }, 300)
  }

  handeleDropdownChange(e, { value }) {
    switch (value) {
      case 'signout': {
        this.props.signoutUser();
        history.push(`/${value}`);
      }
    }

  }

  render() {
    const { authenticated, user, fetchMovies } = this.props;
    const { isLoading, value, results } = this.state;
    const trigger = (
      <span>
        <Icon name='user' /> Hello, {!user || user.username}
      </span>
    );
    const options = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>{!user || user.username}</strong>
          </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile', value: 'profile' },
      { key: 'sign-out', text: 'Sign Out', value: 'signout' },
    ]
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Image src={Logo} id='Logo' />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Popcorn Review</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <SearchBar
                isLoading={this.state.isLoading}
                results={this.state.results}
                value={this.state.value}
                resetComponent={this.resetComponent}
                handleResultSelect={this.handleResultSelect}
                handleSearchChange={this.handleSearchChange}
              />
            </Navbar.Form>
            <Nav>
              <NavDropdown eventKey={3} title={this.state.searchBy} id="basic-nav-dropdown" onSelect={this.onChangeDropdown}>
                <MenuItem eventKey='title'>title</MenuItem>
                <MenuItem eventKey='actor'>actor</MenuItem>
                <MenuItem eventKey='director'>director</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown eventKey={3} title={this.state.sortBy} id="basic-nav-dropdown" onSelect={this.handleSortByChange}>
                <MenuItem eventKey='title ascending'>Title<Icon name='sort alphabet down' /></MenuItem>
                <MenuItem eventKey='title descending'>Title<Icon name='sort alphabet up' /></MenuItem>
                <MenuItem eventKey='highest rating'>Rating<Icon name='sort numeric down' /></MenuItem>
                <MenuItem eventKey='lowest rating'>Rating<Icon name='sort numeric up' /></MenuItem>
                <MenuItem eventKey='highest gross'>Gross<Icon name='sort amount down' /></MenuItem>
                <MenuItem eventKey='lowest gross'>Gross<Icon name='sort amount up' /></MenuItem>
                <MenuItem eventKey='longest duration'>Duration<Icon name='sort amount down' /></MenuItem>
                <MenuItem eventKey='shortest duration'>Duration<Icon name='sort amount up' /></MenuItem>
                <MenuItem eventKey='newest'>Newest</MenuItem>
                <MenuItem eventKey='oldest'>Oldest</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to="/advancedSearch">
                <NavItem>
                  Advanced Search
              </NavItem>
              </LinkContainer>
            </Nav>
            {authenticated ?
              <Nav pullRight>
                <NavItem>
                  <Dropdown trigger={trigger} options={options} onChange={this.handeleDropdownChange} />
                </NavItem>

                {/* <NavItem>
                  Signed in as: {user.username}
                </NavItem>
                <LinkContainer to="/signout">
                  <NavItem onClick={() => { this.props.signoutUser() }}>
                    Sign out
                </NavItem>
                </LinkContainer> */}
              </Nav>
              :
              <Nav pullRight>
                <LinkContainer to="/signup">
                  <NavItem>
                    Sign up
                </NavItem>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <NavItem>
                    Login
                </NavItem>
                </LinkContainer>
              </Nav>
            }
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  const { movies } = state.movies;
  return {
    movies,
    authenticated: auth.authenticated,
    user: auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies() {
      dispatch(fetchMovies());
    },
    fetchMovieGenres() {
      dispatch(fetchMovieGenres());
    },
    signoutUser() {
      dispatch(signoutUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);