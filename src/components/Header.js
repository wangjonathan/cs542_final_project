import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button,
  DropdownButton,
  Image
} from 'react-bootstrap'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from './SearchBar/SearchBar';

import { signoutUser } from '..//actions/auth';
import { fetchMovies } from '../actions/movies';
import './SearchBar/SearchBar.css';
import Logo from '../../image/popcorn.png';

class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = {
      isOpen: false,
      activeDropdown: 'Search by...',
      "isLoading": false,
      "results": [],
      "value": ""
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onChangeDropdown(evt) {
    this.setState({ activeDropdown: evt })
  }

  resetComponent() {
    this.setState({ isLoading: false, results: [], value: '' })
  }

  handleResultSelect(e, { result }) {
    console.log(result);
    this.setState({ value: result.title })
  }

  handleSearchChange(e, { value }) {
    console.log(value);
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      // const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      // const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: source,
      })
    }, 300)
  }

  render() {
    const { authenticated, user, fetchMovies } = this.props;
    const { isLoading, value, results } = this.state;
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
              {/* <SearchBar
                onSearch={this.props.fetchMovies}
                dynamicSearchStartsFrom={0}
              /> */}
              {/* <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={this.handleSearchChange}
                results={results}
                value={value}
              /> */}
              <SearchBar />

            </Navbar.Form>
            <Nav>
              <NavDropdown eventKey={3} title={this.state.activeDropdown} id="basic-nav-dropdown" onSelect={this.onChangeDropdown}>
                <MenuItem eventKey='Title'>Title</MenuItem>
                <MenuItem eventKey='Actor'>Actor</MenuItem>
                <MenuItem eventKey='Director'>Director</MenuItem>
              </NavDropdown>
            </Nav>
            {authenticated ?
              <Nav pullRight>
                <NavItem>
                  Signed in as: {user.username}
                </NavItem>
                <LinkContainer to="/signout">
                  <NavItem onClick={() => { this.props.signoutUser() }}>
                    Sign out
                </NavItem>
                </LinkContainer>
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
  return {
    authenticated: auth.authenticated,
    user: auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
    signoutUser: () => {
      dispatch(signoutUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);