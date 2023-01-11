const challenge = (state = [], action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_CHALLENGES':
      return [];
    // Set challenges from database
    case 'SET_CHALLENGES':
      return action.payload;
    default:
      return state;
  }
};

export default challenge;