import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { selectCurrentUser } from "../../../features/userSlice";

const MenuHamburger = ({ menuOpen, setMenuOpen }) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentRole = currentUser.user?.role;

  const menus = [
    { link: "/", text: "HOME", delay: "0.1s" },
    { link: "/shop/", text: "SHOP", delay: "0.2s" },
    { link: "/wholesale/", text: "WHOLESALE", delay: "0.3s" },
  ];

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      {menuOpen ? (
        <div className="hamburger_menu">
          <div className="text-left ml-20" onClick={handleMenuClose}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
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
            {currentRole === "admin" ? (
              <Link to="/add-product/">
                <li
                  className="my-8"
                  style={{
                    opacity: "0",
                    animation: "1s SlideInBottomToTop forwards",
                    animationDelay: "0.4s",
                  }}
                >
                  ADD PRODUCT
                </li>
              </Link>
            ) : null}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MenuHamburger;
