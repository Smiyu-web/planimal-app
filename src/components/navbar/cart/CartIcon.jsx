import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { setCartOpen } from "../../../features/cartSlice";

function totalQty(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item.quantity;
  }
  return sum;
}

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleCartOpen = () => {
    dispatch(setCartOpen());
  };

  return (
    <div className="relative right-10 ml-16">
      <div className="cursor-pointer">
        <FontAwesomeIcon
          icon={faShoppingCart}
          size="lg"
          onClick={handleCartOpen}
        />
      </div>
      {/* <ShoppingCart className="cartIcon" onClick={toggleCartHiddenProps} /> */}
      <div className="">
        <span className="cartCount">0</span>
      </div>
    </div>
  );
};

export default CartIcon;
