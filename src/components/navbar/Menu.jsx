import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../features/userSlice";

const Menu = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentRole = currentUser.user?.role;

  return (
    <div className="hidden lg:block">
      <ul className="flex ml-5 md:ml-10">
        <li className="mr-3 cursor-pointer">
          <h6>HOME</h6>
        </li>
        <li className="mr-3 cursor-pointer">
          <h6>SHOP</h6>
        </li>
        <li className="mr-3 cursor-pointer">
          <h6>WHOLESALE</h6>
        </li>
        {currentRole === "admin" ? (
          <Link to={"/add-product/"}>
            <li className="cursor-pointer">
              <h6>ADD PRODUCT</h6>
            </li>
          </Link>
        ) : null}
      </ul>
    </div>
  );
};

export default Menu;
