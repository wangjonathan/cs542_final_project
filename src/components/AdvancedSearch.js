import React, { Component } from 'react';
import {
  Container,
  Message,
  Form,
  Button,
  Dropdown
} from 'semantic-ui-react'

import { categoryOptions, sortByOptions } from '../../constant/options';

// const categoryOptions = [{
//   text: 'movie',
//   value: 'movie'
// }, {
//   text: 'review',
//   value: 'review'
// }]

class AdvancedSearch extends Component {
  render() {
    return (
      <div>
        <Container>
          <Message attached header='Customize Your Search' />
          <Form className='attached fluid segment' loading={this.props.isWaiting === 'true'}>
            <Form.Field>
              <label>Show me information about{' '}</label>
              <Dropdown inline options={categoryOptions} defaultValue={categoryOptions[0].value} />
            </Form.Field>
            <Form.Field>
              <label>Sorted by{' '}</label>
              <Dropdown inline options={sortByOptions} defaultValue={sortByOptions[0].value} />
            </Form.Field>
            <Button primary type='submit' onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Container>
      </div>
    )
  }
};

export default AdvancedSearch;
