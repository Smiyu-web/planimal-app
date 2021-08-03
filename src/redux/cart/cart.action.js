export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_CART_ITEM = "ADD_CART_ITEM";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});
