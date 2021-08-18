import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import CustomeBtn from "../../UIkit/CustomeBtn";
import CartItem from "./CartItem";
import {
  selectCartItems,
  selectCartOpen,
  setCartOpen,
} from "../../../features/cartSlice";

const CartOpen = () => {
  const dispatch = useDispatch();
  const select_Cart_Items = useSelector(selectCartItems);
  const select_Cart_Open = useSelector(selectCartOpen);

  return (
    <div>
      {select_Cart_Open ? (
        <div className="open_cart">
          <div
            className="z-50 mt-5 mr-9 md:mr-5 text-right h-10vh"
            onClick={() => dispatch(setCartOpen())}
          >
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="cursor-pointer"
            />
          </div>
          <div className="cart_itmes_container">
            {select_Cart_Items.length ? (
              select_Cart_Items.map((cartItem) => (
                <CartItem key={cartItem._id} item={cartItem} />
              ))
            ) : (
              <div className="empty_msg">Empty</div>
            )}
          </div>
          <div className="flex justify-center items-center h-20vh">
            <CustomeBtn
              className="customeBtn bg-white text-primary border-primary"
              button="CHECH OUT"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartOpen;
