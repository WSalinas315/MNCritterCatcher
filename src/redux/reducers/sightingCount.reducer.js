import { combineReducers } from "redux";

const sightingCount = (state = [], action) => {
  switch (action.type) {
    // Clear count number
    case 'CLEAR_COUNT':
      return [];
    // Set sightings from database
    case 'SET_COUNT':
      return action.payload;
    default:
      return state;
  }
};

const animalCounts = (state = { Mammal: 0, Bird: 0, Reptile: 0, Fish: 0 }, action) => {
  switch (action.type) {
    // Clear count number
    case 'CLEAR_ANIMAL_COUNTS':
      return [];
    // Set sightings from database
    case 'SET_ANIMAL_COUNTS':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ sightingCount, animalCounts });