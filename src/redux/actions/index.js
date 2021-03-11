export const addAddress = (payload) => {
  return {
    type: "ADD_ADDRESS",
    payload,
  };
};

export const increment = () => {
  return {
    type: "INCREMENT_CART",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT_CART",
  };
};
