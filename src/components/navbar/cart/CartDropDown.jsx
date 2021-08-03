import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { selectCartItems } from "../../../redux/cart/cart.selector";

import CustomBtn from "../../UIkit/CustomBtn";
import CartItem from "./CartItem";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
const CartDropDown = ({ cartItemProps }) => {
  console.log("cart dropdown", cartItemProps);
  return (
    <div>
      <CartDropdownContainer>
        <CartItemsContainer>
          {cartItemProps.length ? (
            cartItemProps.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <EmptyMessageContainer>Empty</EmptyMessageContainer>
          )}
          {/* {cartItemProps ? (
            <h1>item</h1>
          ) : (
            <EmptyMessageContainer>Empty</EmptyMessageContainer>
          )} */}
        </CartItemsContainer>
        <div className="mx-auto mt-5">
          <CustomBtn button="CHECH OUT" />
        </div>
      </CartDropdownContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemProps: selectCartItems,
});

export default connect(mapStateToProps)(CartDropDown);
