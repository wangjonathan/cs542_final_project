import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onClickDropdownItem = this.onClickDropdownItem.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onClickDropdownItem(event) {
    console.log(event.target.innerHTML);
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.onClickDropdownItem}>Title</DropdownItem>
          <DropdownItem>Director</DropdownItem>
          <DropdownItem>Year</DropdownItem>
          <DropdownItem>Genre</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default SearchFilter;
