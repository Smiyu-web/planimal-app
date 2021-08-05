import React from "react";
import { useSelector } from "react-redux";

import CustomeBtn from "../../UIkit/CustomeBtn";
import CartItem from "./CartItem";
import { selectCartItems } from "../../../features/cartSlice";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);

  console.log("cart dropdown", cartItems);
  return (
    <div>
      <div className="cart_dropdown_container">
        <div className="cart_itmes_container">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <div className="empty_msg">Empty</div>
          )}
        </div>
        <div className="mx-auto mt-5">
          <CustomeBtn
            className="customeBtn bg-white text-primary border-primary"
            button="CHECH OUT"
          />
        </div>
      </div>
    </div>
  );
};

export default CartDropDown;
