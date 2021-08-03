import React from "react";

const CartItem = ({ item }) => {
  console.log(item.id);
  return (
    <div className="w-full flex h-20 mb-4">
      <img className="w-1/3" src={item.imageUrl} alt="item" />
      <div className="w-2/3 flex flex-col items-start justify-center py-2 pl-5">
        <span className="text-sm">{item.name}</span>
        <span className="price">
          {item.quantity} X ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
