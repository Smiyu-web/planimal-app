import React from "react";
import BounceLoader from "react-spinners/ClipLoader";

const Loading = ({ loading }) => {
  return (
    <div className="text-center text-red-200">
      <BounceLoader loading={loading} size={50} color="#FDE2E1" />
    </div>
  );
};

export default Loading;
