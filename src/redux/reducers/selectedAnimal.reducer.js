
const selectedAnimal = (state = {
  conservation_status: '',
  description: "",
  family: "",
  id: "",
  length: "",
  length_uom: "",
  name: "",
  scientific_name: "",
  stock_image: "",
  subtype: "",
  type: "",
  weight: "",
  weight_uom: "",
  wingspan: ""
}, action) => {
  switch (action.type) {
    // Clear reducer data
    case 'CLEAR_REF_ANIMAL':
      return [];
    // Set animal data from database
    case 'SET_SELECTED_ANIMAL':
      return action.payload[0];
    default:
      return state;
  }
};

export default selectedAnimal;