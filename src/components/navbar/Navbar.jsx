import React from "react";
import Account from "../navbar/account/Account";
import Cart from "../navbar/cart/Cart";
import Hamburger from "./hamburger/Hamburger";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Menu />
        <Hamburger />
      </div>
      <div>
        <h1 className="md:text-center">PLANIMAL</h1>
        <h6 className="subtitle">natural interior</h6>
      </div>
      <div className="flex justify-end">
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default Navbar;
