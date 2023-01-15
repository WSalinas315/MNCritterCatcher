import { combineReducers } from "redux";

const sighting = (state = [], action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_SIGHTINGS':
      return [];
    // Set sightings from database
    case 'SET_SIGHTINGS':
      return action.payload;
    default:
      return state;
  }
};

const visibility = (state = false, action) => {
  switch (action.type) {
    // set true
    case 'SET_VISIBILITY_PUBLIC':
      return true;
    // set false
    case 'SET_VISIBILITY_SELF':
      return false;
    // default
    default:
      return state;
  }
};

export default combineReducers({ sighting, visibility });