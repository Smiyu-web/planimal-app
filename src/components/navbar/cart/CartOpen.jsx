import React, { useEffect } from "react";
import Axios from "axios";
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
import { login } from "../../../features/userSlice";
import { selectListItems } from "../../../features/itemSlice";
import { getUsersItemInCart } from "../../../features/findData";

const CartOpen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const allItems = useSelector(selectListItems);
  const isOpen = useSelector(selectCartOpen);
  const currentUser = useSelector(login);

  useEffect(async () => {
    try {
      const result = await Axios("http://localhost:2000/cart");
      const userId = currentUser.payload.user.currentUser.user._id;
      const cartItemsUser = getUsersItemInCart(result.data, userId);
      // const cartItems = getItemsInCart(allItems, cartItemsUser);
      const cartItems = [];

      for (const item in allItems) {
        for (const cartItem in cartItemsUser) {
          if (item._id === cartItem.itemId) {
            cartItems.push(item);
          }
        }
        return cartItems;
      }

      // const cartItems = () => {
      //   return allItems.filter(
      //     (data) => data._id === cartItemsUser.map((item) => item.itemId)
      //   );
      // };

      // dispatch(setCartItems(cartItems));
      console.log(cartItems);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {isOpen ? (
        <div
          className="open_cart"
          style={{
            opacity: "0",
            animation: "1s SlideIn forwards",
          }}
        >
          <div
            className="absolute z-50 right-10 -top-5 h-10vh"
            onClick={() => dispatch(setCartOpen())}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" className="" />
          </div>
          <div>
            <div className="cart_itmes_container">
              {cartItems.length ? (
                cartItems.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))
              ) : (
                <div className="empty_msg">Empty</div>
              )}
            </div>
            <div className="flex fles justify-center items-center h-20vh">
              <CustomeBtn
                className="customeBtn bg-white text-primary border-primary"
                button="CHECH OUT"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartOpen;
