import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { setRemoveCartItem } from "../../../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-cartitem mb-4">
      <div className="flex items-center justify-center">
        <img
          className="w-20"
          src={`/assets/uploads/${item.image}`}
          alt="item"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-sm">{item.title}</span>
        <span className="price">
          {item.quantity} x ${item.retailPrice}
        </span>
      </div>
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={() => dispatch(setRemoveCartItem(item))}
      >
        <FontAwesomeIcon icon={faTrash} size="sm" />
      </div>
    </div>
  );
};

export default CartItem;
