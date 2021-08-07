import React from "react";
import { useSelector } from "react-redux";

import CartIcon2 from "./CartIcon2";
import { selectCartOpen } from "../../../features/cartSlice";
import CartOpen from "./CartOpen";

const Cart = () => {
  const cartOpen = useSelector(selectCartOpen);
  return (
    <div>
      <CartIcon2 />
      {!cartOpen ? null : <CartOpen />}
    </div>
  );
};

export default Cart;
