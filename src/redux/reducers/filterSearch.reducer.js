import { combineReducers } from 'redux';

const filterSearch = (state = {subtypes:[], families:[], species: []}, action) => {
  switch (action.type) {
    case 'CLEAR_FILTER_SEARCH':
      return {subtypes:[], families:[], species: []};
    case 'SET_SUBTYPES':
      return {subtypes: action.payload, families: [], species: []};
    case 'SET_FAMILIES':
      return {...state, families: action.payload, species: []};
    case 'SET_SPECIES':
      return {...state, species: action.payload};
    default:
      return state;
  }
};

export default filterSearch;
