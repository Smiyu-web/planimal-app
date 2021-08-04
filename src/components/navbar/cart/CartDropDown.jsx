import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../../redux/cart/cart.selector";

import CustomeBtn from "../../UIkit/CustomeBtn";
import CartItem from "./CartItem";

const CartDropDown = ({ cartItemProps }) => {
  console.log("cart dropdown", cartItemProps);
  return (
    <div>
      <div className="cart_dropdown_container">
        <div className="cart_itmes_container">
          {cartItemProps.length ? (
            cartItemProps.map((cartItem) => (
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

const mapStateToProps = createStructuredSelector({
  cartItemProps: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
