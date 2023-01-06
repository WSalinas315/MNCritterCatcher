const sightingCount = (state = 0, action) => {
  switch (action.type) {
    // Clear count number
    case 'CLEAR_COUNT':
      return 0;
    // Set sightings from database
    case 'SET_COUNT':
      return action.payload;
    default:
      return state;
  }
};

export default sightingCount;