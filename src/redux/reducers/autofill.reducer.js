const autofill = (state = false, action) => {
  switch (action.type) {
    // set true
    case 'SET_AUTOFILL_TRUE':
      return true;
    // set false
    case 'SET_AUTOFILL_FALSE':
      return false;
    // default
    default:
      return state;
  }
};

export default autofill;