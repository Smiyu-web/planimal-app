import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "./CartIcon";
import { selectCartOpen } from "../../../features/cartSlice";
import CartOpen from "./CartOpen";

const Cart = () => {
  const cartOpen = useSelector(selectCartOpen);
  return (
    <div>
      <CartIcon />
      {!cartOpen ? null : <CartOpen />}
    </div>
  );
};

export default Cart;
