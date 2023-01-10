const animalList = (state = [], action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_SEARCH_LIST':
      return [];
    // Set animals from database
    case 'SET_SEARCH_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default animalList;