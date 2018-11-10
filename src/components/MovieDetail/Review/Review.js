import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Badge
} from 'react-bootstrap';
import {
  Divider,
  Button,
  Comment,
  Form,
  Header,
  Label,
  Icon,
  Tab,
  Rating,
  TextArea
} from 'semantic-ui-react';

const Review = props => {
  const { user, authenticated, isLoading, reviews, review, rating } = props;
  return (
    <div>
      <Comment.Group>
        {!reviews || reviews.map(review => (
          <Comment>
            <Comment.Content>
              <Comment.Author as='a'><Icon name='user circle' />{review.username}</Comment.Author>
              <Comment.Metadata>
                <div>{review.date}</div>
              </Comment.Metadata>
              <Comment.Text><Rating icon='star' defaultRating={1} />{review.rating}</Comment.Text>
              <Comment.Text>{review.review}</Comment.Text>
              {reviews !== undefined && user !== undefined ?
                (reviews.user_id === user.user_id ||
                  <Comment.Actions>
                    <Comment.Action>Edit</Comment.Action>
                  </Comment.Actions>)
                :
                ""
              }
            </Comment.Content>
          </Comment>
        ))}
        {!authenticated ||
          <Form reply loading={isLoading}>
            <Form.Field>
              <label>Your review</label>
              <TextArea value={review} onChange={props.handleTextAreaChange} />
            </Form.Field>
            <Form.Field>
              <label>Your rating</label>
              <Rating icon='star' defaultRating={0} maxRating={10} rating={rating} onRate={props.handleRatingChange} />
            </Form.Field>
            <Button content='Add Reply' labelPosition='left' icon='edit' primary onClick={props.handleReviewSubmit} />
          </Form>
        }

      </Comment.Group>
    </div >
  );
};

export default Review;