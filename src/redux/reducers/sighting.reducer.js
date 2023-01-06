
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

export default sighting;