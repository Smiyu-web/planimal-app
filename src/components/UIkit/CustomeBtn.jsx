import React from "react";

const CustomeBtn = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.button}
    </div>
  );
};

export default CustomeBtn;
