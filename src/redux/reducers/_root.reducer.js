import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import filterSearch from './filterSearch.reducer';
import selectedAnimal from './selectedAnimal.reducer';
import autofill from './autofill.reducer';
import sighting from './sighting.reducer';
import detailed from './detailedSighting.reducer';
import sightingCount from './sightingCount.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  filterSearch, // will have object properties based on dropdowns selected during search
  selectedAnimal, // will contain all the database properties of the animal being looked up 
  autofill, // will contain autofill boolean, sighting list and sighting count
  sighting, // will contain a lits of all sightings posted by the current user
  detailed, // will contain the details of the sighting selected
  sightingCount, // will contain the number of sightings a user has
});

export default rootReducer;
