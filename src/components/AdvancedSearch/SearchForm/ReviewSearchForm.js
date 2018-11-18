import React from 'react';
import {
  Message,
  Form,
  Dropdown,
  Button
} from 'semantic-ui-react';
import { categoryOptions, sortByOptions } from '../../../../constant/options';

const ReviewSearchForm = props => {
  return (
    <div>
      <Form.Field>
        <Dropdown.Header>Sorted by</Dropdown.Header>
        <Dropdown options={sortByOptions} defaultValue={sortByOptions[0].value} />
      </Form.Field>
    </div>
  )
};

export default ReviewSearchForm;