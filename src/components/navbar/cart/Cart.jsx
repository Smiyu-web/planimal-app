import React from "react";
import { connect } from "react-redux";

import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";

const Cart = ({ hiddenProps }) => {
  return (
    <div>
      <CartIcon />
      {hiddenProps ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hiddenProps: state.cart.hidden,
});

// const mapStateToProps = (state) => {
//   console.log(state.cart.hidden);
//   return state;
// };

export default connect(mapStateToProps)(Cart);
