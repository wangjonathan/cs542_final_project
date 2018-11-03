import React, { Component } from 'react';
import Select from 'react-select';
import SelectList from 'react-widgets/lib/SelectList'

import 'react-widgets/dist/css/react-widgets.css';
class SearchFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      options: ['orange', 'red', 'blue', 'purple'],
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
      <SelectList
        data={options}
      />
    );
  }
};

export default SearchFilter;
