import { combineReducers } from 'redux';

const filterSearch = (state = {type: '', subtypes:[], families:[], species: [], selected: ''}, action) => {
  switch (action.type) {
    // Clear all arrays within state object
    case 'CLEAR_FILTER_SEARCH':
      return {type: '', subtypes:[], families:[], species: [], selected: ''};
    // Set Type and clear subtypes/families/species
    case 'SET_TYPE':
      return {subtypes: action.payload, subtypes: [], families: [], species: [], selected: ''};
    // Set Subtypes and clear families/species
    case 'SET_SUBTYPES':
      return {subtypes: action.payload, families: [], species: [], selected: ''};
    // Set Famlies and clear species
    case 'SET_FAMILIES':
      return {...state, families: action.payload, species: [], selected: ''};
    // Set Species
    case 'SET_SPECIES':
      return {...state, species: action.payload, selected: ''};
    // Set Selected Species
    case 'SET_SELECTED':
      return {...state, selected: action.payload};
    default:
      return state;
  }
};

export default filterSearch;
