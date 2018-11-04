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
import { LinkContainer } from 'react-router-bootstrap';
import SearchBar from '@opuscapita/react-searchbar';

import { signoutUser } from '..//actions/auth';
import { fetchMovies } from '../actions/movies';
import './SearchBar/SearchBar.css';
import Logo from '../../image/popcorn.png';
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.state = {
      isOpen: false,
      activeDropdown: 'Search by...'
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

  render() {
    const { authenticated, user } = this.props;
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Image src={Logo} id='Logo' />
          </Navbar.Header>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/movieList">Popcorn Review</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <SearchBar
                onSearch={this.props.fetchData}
                dynamicSearchStartsFrom={0}
              />

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
    fetchData: () => {
      dispatch(fetchMovies());
    },
    signoutUser: () => {
      dispatch(signoutUser());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);