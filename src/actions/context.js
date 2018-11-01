import { TOGGLE_SPINNER } from './actionTypes';

export function toggleSpinner(isSpinnerActive) {
  return {
    type: TOGGLE_SPINNER,
    isSpinnerActive
  }
}