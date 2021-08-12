import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCurrentUser, logout } from "../../../features/userSlice";

const Account = () => {
  const dispatch = useDispatch();
  const isUser = useSelector(setCurrentUser);

  const handleLogout = () => {
    dispatch(logout({ user: undefined }));
    localStorage.clear();
  };

  return (
    <div className="flex mr-6">
      <div className="mr-2 mt-1 text-xs">
        Hello,&nbsp;
        {isUser.user?.name ? isUser.user?.name : "guest"}
      </div>
      {!isUser ? (
        <Link to="/signup">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Link>
      ) : (
        <FontAwesomeIcon icon={faUser} size="lg" onClick={handleLogout} />
      )}
    </div>
  );
};

export default Account;
