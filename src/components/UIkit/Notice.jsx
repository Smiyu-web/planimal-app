import React from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notice = (props) => {
  return (
    <div className="notice">
      <p className="text-xs text-white">{props.message}</p>
      <button className="notice_btn" onClick={props.clear}>
        <FontAwesomeIcon icon={faTimes} size="sm" className="ml-10" />
      </button>
    </div>
  );
};

export default Notice;
