import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuHamburger from "./MenuHamburger";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="xl:hidden ml-10">
      {!menuOpen ? (
        <div className="z-50" onClick={handleMenuOpen}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      ) : (
        <div className="text-bl z-50" onClick={handleMenuClose}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
      )}

      <MenuHamburger isOpen={menuOpen} />
    </div>
  );
};

export default Hamburger;
