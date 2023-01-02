
const selectedAnimal = (state = [], action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_REF_ANIMAL':
      return [];
    // Set animal data from database
    case 'SET_SELECTED_ANIMAL':
      return action.payload;
    default:
      return state;
  }
};

export default selectedAnimal;