import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuHamburger = ({ isOpen }) => {
  console.log(isOpen);
  const menus = [
    { link: "/", text: "HOME", delay: "0.1s" },
    { link: "/shop/", text: "SHOP", delay: "0.2s" },
    { link: "/wholesale/", text: "WHOLESALE", delay: "0.3s" },
    { link: "/add-product/", text: "ADD PRODUCT ", delay: "0.4s" },
  ];

  return (
    <div>
      {isOpen ? (
        <div className="hamburger_menu">
          <ul className="hamburger_ul">
            {menus.map((menu) => {
              return (
                <Link to={menu.link} key={menu.index}>
                  <li
                    className="my-8"
                    style={{
                      opacity: "0",
                      animation: "1s SlideInBottomToTop forwards",
                      animationDelay: menu.delay,
                    }}
                  >
                    {menu.text}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MenuHamburger;
