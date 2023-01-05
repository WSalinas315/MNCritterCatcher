import { combineReducers } from 'redux';

const addSighting = (state = {user_id: '', animal_id: '', date: '', location: '', caption: '', image: ''}, action) => {
  switch (action.type) {
    // Clear all properties within state object
    case 'CLEAR_NEW SIGHTING':
      return {user_id: '', animal_id: '', date: '', location: '', caption: '', image: ''};

    // Set Subtypes and clear families/species
    case 'SET_SUYPES':
      return {subtypes: action.payload, families: [], species: [], selected: ''};
    // Set Famlies and clear species
    case 'SET_FAMIES':
      return {...state, families: action.payload, species: [], selected: ''};
    // Set Species
    case 'SET_SPECS':
      return {...state, species: action.payload, selected: ''};
    // Set Selected Species
    case 'SET_SELEED':
      return {...state, selected: action.payload};
    default:
      return state;
  }
};

export default addSighting;