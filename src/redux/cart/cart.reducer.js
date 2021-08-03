import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "./cart.action.js";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
