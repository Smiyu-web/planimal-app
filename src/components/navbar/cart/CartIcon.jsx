import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCart } from "../../../assets/img/shopping-cart-solid.svg";
import { toggleCartHidden } from "../../../redux/cart/cart.action";

function totalQty(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item.quantity;
  }
  return sum;
}
const CartIcon = ({ toggleCartHiddenProps, cartItemProps }) => {
  return (
    <div className="relative">
      <ShoppingCart className="cartIcon" onClick={toggleCartHiddenProps} />
      <div className="">
        <span className="cartCount">{totalQty(cartItemProps)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
