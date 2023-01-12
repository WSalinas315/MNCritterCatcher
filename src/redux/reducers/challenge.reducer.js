import { actionChannel } from "redux-saga/effects";

const challenge = (state = {}, action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_CHALLENGES':
      return [];
    // Set challenges from database
    case 'SET_CHALLENGES':
      const challenge_id = action.payload.challenge_id;
      return {...state, [challenge_id]: {sightings_num: action.payload.sightings_num, is_complete: action.payload.is_complete}};
    default:
      return state;
  }
};

export default challenge;