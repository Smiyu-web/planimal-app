import React from "react";

const CustomBtn = (props) => {
  return (
    <div className="customBtn" onClick={props.onClick}>
      {props.button}
    </div>
  );
};

export default CustomBtn;
