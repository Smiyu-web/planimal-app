import React from "react";

const ImageWrapper = ({ image }) => {
  return (
    <div>
      <img src={image} alt={image} className="w-screen h-50vh md:h-80vh" />
    </div>
  );
};

export default ImageWrapper;
