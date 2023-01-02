import { combineReducers } from 'redux';

const filterSearch = (state = {subtypes:[], families:[], species: []}, action) => {
  switch (action.type) {
    // Clear all arrays within state object
    case 'CLEAR_FILTER_SEARCH':
      return {subtypes:[], families:[], species: []};
    // Set Subtypes and clear families/species
    case 'SET_SUBTYPES':
      return {subtypes: action.payload, families: [], species: []};
    // Set Famlies and clear species
    case 'SET_FAMILIES':
      return {...state, families: action.payload, species: []};
    // Set Species
    case 'SET_SPECIES':
      return {...state, species: action.payload};
    default:
      return state;
  }
};

export default filterSearch;
