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
  setCartItems,
} from "../../../features/cartSlice";
import { login } from "../../../features/userSlice";
import { selectListItems } from "../../../features/itemSlice";
import {
  getUsersItemInCart,
  findItemsInCart,
} from "../../../features/findData";

const CartOpen = () => {
  const dispatch = useDispatch();
  const select_Cart_Items = useSelector(selectCartItems);
  const select_List_Items = useSelector(selectListItems);
  const select_Cart_Open = useSelector(selectCartOpen);
  const currentUser = useSelector(login);
  const cartItemsArr = [];

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await Axios("http://localhost:2000/cart");
  //       const userId = currentUser.payload.user.currentUser.user._id;
  //       const userCartItems = getUsersItemInCart(result.data, userId);
  //       // const cartItemsArr = [];
  //       // const cart = findItemsInCart(
  //       //   select_List_Items,
  //       //   userCartItems,
  //       //   cartItemsArr
  //       // );
  //       // dispatch(setCartItems(cartItems));
  //       // console.log(select_List_Items);
  //       console.log(userCartItems);
  //       // console.log(cartItemsArr);
  //       // console.log(
  //       //   findItemsInCart(select_List_Items, userCartItems, cartItemsArr)
  //       // );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      {select_Cart_Open ? (
        <div className="open_cart">
          <div
            className="absolute z-50 right-10 top-5 h-10vh"
            onClick={() => dispatch(setCartOpen())}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
          <div>
            <div className="cart_itmes_container">
              {select_Cart_Items.length ? (
                select_Cart_Items.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))
              ) : (
                <div className="empty_msg">Empty</div>
              )}
            </div>
            <div className="flex justify-center items-center h-10vh">
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
