import React, { Component } from 'react';
import {
  Button,
  Form,
  Label,
  Icon,
  Rating,
  TextArea
} from 'semantic-ui-react';

class ReviewForm extends Component {
  render() {
    const { isLoading, review, rating, children, submitBtnText, handleTextAreaChange, handleRatingChange, handleReviewSubmit } = this.props;
    // console.log({ rating, review });
    return (
      <div>
        <Form reply loading={isLoading}>
          <Form.Field>
            <label>Your review</label>
            <TextArea value={review} onChange={handleTextAreaChange} />
          </Form.Field>
          <Form.Field>
            <label>Your rating</label>
            <Rating icon='star' maxRating={10} rating={rating} onRate={handleRatingChange} clearable />
          </Form.Field>
          <Button content={'Submit Review'} labelPosition='left' icon='edit' primary onClick={handleReviewSubmit} />
          {children}
        </Form>
      </div>
    )
  }

};

export default ReviewForm;