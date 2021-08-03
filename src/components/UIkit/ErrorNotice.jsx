import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorNotice = (props) => {
  return (
    <div className="error_notice">
      <p className="text-xs text-gray">{props.message}</p>
      <button className="error_btn" onClick={props.clearError}>
        <FontAwesomeIcon icon={faTimes} size="sm" className="" />
      </button>
    </div>
  );
};

export default ErrorNotice;
