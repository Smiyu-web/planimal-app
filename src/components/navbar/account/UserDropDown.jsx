import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../../features/userSlice";

const UserDropDown = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout({ user: undefined }));
  };
  return (
    <div>
      <div className="cart_dropdown_container">
        <div className="cart_itmes_container" onClick={handleLogout}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default UserDropDown;
