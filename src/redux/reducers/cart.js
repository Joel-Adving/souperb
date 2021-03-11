const cartReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_CART":
      return state + 1;
    case "DECREMENT_CART":
      return state - 1;
    default:
      return state;
  }
};

export default cartReducer;
