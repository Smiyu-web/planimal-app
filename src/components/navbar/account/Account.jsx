import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCurrentUser } from "../../../features/userSlice";
import { useState } from "react";
import UserDropDown from "./UserDropDown";

const Account = () => {
  const isUser = useSelector(setCurrentUser);
  const [userOpen, setUserOpen] = useState(false);

  return (
    <div className="flex">
      <div className="mr-2 mt-1 text-xs">
        Hello,&nbsp;
        {isUser.user?.name ? isUser.user?.name : "guest"}
      </div>
      {/* <Link to="/signup"> */}
      <FontAwesomeIcon
        icon={faUser}
        size="lg"
        onClick={() => setUserOpen(!userOpen)}
      />
      {userOpen ? <UserDropDown /> : null}
      {/* </Link> */}
    </div>
  );
};

export default Account;
