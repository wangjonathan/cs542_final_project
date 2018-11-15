import axios from 'axios';
import { UPDATE_REVIEWS, SET_REVIEWS, REVIEW_LOADING, SET_MODAL_OPEN } from './actionTypes';

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews
  }
}

export function setModalOpen(isOpen) {
  return {
    type: SET_MODAL_OPEN,
    payload: isOpen
  }
}

export function reviewLoading(isLoading) {
  return {
    type: REVIEW_LOADING,
    payload: isLoading
  }
}

export function updateReviews(newReview) {
  return {
    type: UPDATE_REVIEWS,
    payload: newReview
  }
}

export const fetchReviewByMovie = movie_id => {
  return dispatch => {
    axios.get(`http://localhost:5000/reviewbymovie/${movie_id}`)
      .then(res => {
        console.log(res.data);
        dispatch(setReviews(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const addReview = ({ user_id, movie_id, rating, review, date }) => {
  return dispatch => {
    dispatch(reviewLoading(true));
    axios.post('http://localhost:5000/review', {
      user_id,
      movie_id,
      rating,
      review,
      date
    })
      .then(res => {
        console.log(res);
        // dispatch(setReview(res.data));
        dispatch(reviewLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(reviewLoading(false));
      })
  }
}

export const updateReview = ({ user_id, movie_id, rating, review, date }) => {
  return dispatch => {
    dispatch(setModalOpen(true));
    dispatch(reviewLoading(true));
    axios.put('http://localhost:5000/review', {
      user_id,
      movie_id,
      rating,
      review,
      date
    })
      .then(res => {
        console.log(res);
        // dispatch(setReview(res.data));
        dispatch(setModalOpen(false));
        dispatch(reviewLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setModalOpen(false));
        dispatch(reviewLoading(false));
      })
  }
}