import axios from 'axios';
import { GET_REVIEWS, ADD_REVIEW, SET_REVIEW, SET_REVIEWS, REVIEW_LOADING } from './actionTypes';

export function getReviews(movie_id) {
  return {
    type: GET_REVIEWS
  }
}

export function setReview(review) {
  return {
    type: SET_REVIEW,
    payload: review
  }
}

export function setReviews(reviews) {
  return {
    type: SET_REVIEWS,
    payload: reviews
  }
}

export function reviewLoading(isLoading) {
  return {
    type: REVIEW_LOADING,
    payload: isLoading
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
    axios.post('http://localhost:5000/reviews', {
      user_id,
      movie_id,
      rating,
      review,
      date
    })
      .then(res => {
        console.log(res);
        dispatch(setReview(res.data));
        dispatch(reviewLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(reviewLoading(false));
      })
  }
}