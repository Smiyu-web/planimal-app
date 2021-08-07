import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import {
  setCartOpen,
  selectCartItems,
  selectCartOpen,
} from "../../../features/cartSlice";
import CartOpen from "./CartOpen";

function totalQty(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item.quantity;
  }
  return sum;
}

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartOpen = useSelector(selectCartOpen);

  return (
    <div className="relative right-10 ml-16">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="lg"
          onClick={() => dispatch(setCartOpen())}
        />
      </div>
      {/* <ShoppingCart className="cartIcon" onClick={toggleCartHiddenProps} /> */}
      <div>
        <span className="cartCount">{totalQty(cartItems)}</span>
      </div>
    </div>
  );
};

export default CartIcon;
