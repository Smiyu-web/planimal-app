import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";
import { selectCartOpen } from "../../../features/cartSlice";

const Cart = () => {
  const cartOpen = useSelector(selectCartOpen);
  console.log(cartOpen);
  return (
    <div>
      <CartIcon />
      {!cartOpen ? null : <CartDropDown />}
    </div>
  );
};

export default Cart;
