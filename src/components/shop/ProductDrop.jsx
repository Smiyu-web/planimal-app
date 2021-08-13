import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const ProductDrop = ({ itemId }) => {
  return (
    <Link to={`/edit-product/${itemId}`}>
      <div className="text-gray-500">
        <FontAwesomeIcon
          icon={faEllipsisH}
          size="sm"
          className="text-gray-400"
        />
      </div>
    </Link>
  );
};

export default ProductDrop;
