import React from 'react';
import { connect } from 'react-redux';
import {
  Icon,
  Message,
  Modal,
  Button
} from 'semantic-ui-react';
import './editReviewModal.css';
import ReviewForm from '../Review/ReviewForm';

const EditReviewModal = props => {
  const { review, rating, isModalOpen, onClickCancel } = props;
  return (
    <div>
      <Modal centered open={isModalOpen}>
        <Modal.Header>Update Your Review</Modal.Header>
        <Modal.Content>
          <ReviewForm
            loading={false}
            review={review}
            rating={rating}
            handleTextAreaChange={props.handleTextAreaChange}
            handleRatingChange={props.handleRatingChange}
            handleReviewSubmit={props.handleReviewSubmit}>
            <Button negative content='Cancel' onClick={() => onClickCancel(false)}></Button>
          </ReviewForm>
        </Modal.Content>
      </Modal>
    </div>
  )
};

const mapStateToProps = state => {
  const { isModalOpen } = state.review;
  return {
    isModalOpen
  }
};

export default connect(mapStateToProps)(EditReviewModal);