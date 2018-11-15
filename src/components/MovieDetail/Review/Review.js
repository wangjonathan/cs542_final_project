import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Badge
} from 'react-bootstrap';
import {
  Button,
  Comment,
  Form,
  Label,
  Icon,
  Tab,
  Rating,
  TextArea,
  Message,
  Modal
} from 'semantic-ui-react';
import EditReviewModal from '../EditReviewModal/EditReviewModal';
import ReviewForm from './ReviewForm';

const Review = props => {
  const { user, authenticated, isLoading, reviews, review, rating, onClickEdit, onClickCancel } = props;
  return (
    <div>
      <Comment.Group>
        {(reviews && reviews.length > 0) ? reviews.map(reviewObj => (
          <Comment key={reviewObj.user_id}>
            <Comment.Content>
              <Comment.Author as='a'><Icon name='user circle' />{reviewObj.username}</Comment.Author>
              <Comment.Metadata>
                <div>{reviewObj.date}</div>
              </Comment.Metadata>
              <Comment.Text><Rating icon='star' defaultRating={1} />{reviewObj.rating}</Comment.Text>
              <Comment.Text>{reviewObj.review}</Comment.Text>
              {reviews !== undefined && user !== undefined ?
                (reviewObj.user_id === user.user_id &&
                  <div>
                    <Comment.Actions>
                      <Comment.Action as='button' onClick={() => onClickEdit(reviewObj
                      )}>
                        Edit
                  </Comment.Action>
                    </Comment.Actions>
                    <EditReviewModal
                      review={review}
                      rating={rating}
                      handleTextAreaChange={props.handleTextAreaChange}
                      handleRatingChange={props.handleRatingChange}
                      handleReviewSubmit={props.handleReviewUpdateSubmit}
                      onClickCancel={onClickCancel} />
                  </div>
                )
                :
                null
              }
            </Comment.Content>
          </Comment>
        )) :
          <Message
            warning
            header='There are no review at this point.' />}
        {!authenticated ||
          <ReviewForm
            loading={isLoading}
            review={review}
            rating={rating}
            handleTextAreaChange={props.handleTextAreaChange}
            handleRatingChange={props.handleRatingChange}
            handleReviewSubmit={props.handleReviewSubmit} />
        }

      </Comment.Group>
    </div>
  );
};

export default Review;