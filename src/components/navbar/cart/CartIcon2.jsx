import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { setCartOpen, selectCartItems } from "../../../features/cartSlice";
import CartOpen from "./CartOpen";

function totalQty(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item.quantity;
  }
  return sum;
}

const CartIcon2 = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <>
      <div className="cursor-pointer mr-10">
        <div className="relative z-20" onClick={() => dispatch(setCartOpen())}>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </div>
          <div>
            <span className="cartCount">{totalQty(cartItems)}</span>
          </div>
        </div>
      </div>

      <CartOpen />
    </>
  );
};

export default CartIcon2;
