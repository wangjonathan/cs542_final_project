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
} from 'react-bootstrap';
import { Dropdown, Icon } from 'semantic-ui-react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { LinkContainer } from 'react-router-bootstrap';
import history from '../history/history';
import SearchBar from './SearchBar/SearchBar';
import { signoutUser } from '..//actions/auth';
import { fetchMovies } from '../actions/movies';

import './SearchBar/SearchBar.css';
import Logo from '../../image/popcorn.png';

class HeaderBar extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.handeleDropdownChange = this.handeleDropdownChange.bind(this);
    this.state = {
      // isOpen: false,
      activeDropdown: 'title',
      isLoading: false,
      results: [],
      value: "",
    };
  }

  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  onChangeDropdown(evt) {
    this.setState({ activeDropdown: evt })
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
            Signed in as <strong>Bob Smith</strong>
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
              <SearchBar searchBy={this.state.activeDropdown} />
            </Navbar.Form>
            <Nav>
              <NavDropdown eventKey={3} title={this.state.activeDropdown} id="basic-nav-dropdown" onSelect={this.onChangeDropdown}>
                <MenuItem eventKey='title'>Title</MenuItem>
                <MenuItem eventKey='actor'>Actor</MenuItem>
                <MenuItem eventKey='director'>Director</MenuItem>
              </NavDropdown>
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