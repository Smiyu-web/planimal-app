import React from "react";
import Account from "../navbar/account/Account";
import Cart from "../navbar/cart/Cart";
import Menu from "./hamburger/Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Menu />
      </div>
      <div>
        <h1>PLANIMAL</h1>
        <h6 className="subtitle">natural interior</h6>
      </div>
      <div className="flex">
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
