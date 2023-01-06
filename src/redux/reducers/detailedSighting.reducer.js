const detailed = (state = {}, action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_DETAILED_SIGHTING':
      return {};
    // Set detailed sighting
    case 'SET_DETAILED_SIGHTING':
      return action.payload[0];
    default:
      return state;
  }
}

export default detailed;