import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MenuHamburger from "./MenuHamburger";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  return (
    <div className="lg:hidden ml-5 md:ml-10">
      <div className="z-50" onClick={handleMenuOpen}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <MenuHamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Hamburger;
