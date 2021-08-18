import React from "react";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuHamburger = ({ menuOpen, setMenuOpen }) => {
  const menus = [
    { link: "/", text: "HOME", delay: "0.1s" },
    { link: "/shop/", text: "SHOP", delay: "0.2s" },
    { link: "/wholesale/", text: "WHOLESALE", delay: "0.3s" },
    { link: "/add-product/", text: "ADD PRODUCT ", delay: "0.4s" },
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
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MenuHamburger;
