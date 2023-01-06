const detailed = (state = {}, action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_DETAILED_SIGHTING':
      return {};
    // Set detailed sighting
    case 'SET_DETAILED_SIGHTING':
      return action.payload;
    default:
      return state;
  }
}

export default detailed;