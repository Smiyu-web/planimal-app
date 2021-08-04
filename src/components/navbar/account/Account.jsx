import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { setCurrentUser } from "../../../features/userSlice";

const Account = () => {
  // const isUser = useSelector(setCurrentUser);

  return (
    <div className="flex">
      <div className="mr-2 mt-1 text-xs">
        Hello,&nbsp;guest
        {/* {isUser.user?.name ? isUser.user?.name : "guest"} */}
      </div>
      <Link to="/signup">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Link>
    </div>
  );
};

export default Account;
