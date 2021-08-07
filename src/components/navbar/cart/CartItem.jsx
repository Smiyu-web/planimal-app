import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <img className="w-20" src={`/assets/uploads/${item.image}`} alt="item" />
      <div className="flex flex-col items-start justify-center pl-5">
        <span className="text-sm">{item.title}</span>
        <span className="price">
          {item.quantity} x ${item.retailPrice}
        </span>
      </div>
      <div className="pl-5 cursor-pointer">
        <FontAwesomeIcon icon={faTrashAlt} size="sm" />
      </div>
    </div>
  );
};

export default CartItem;
