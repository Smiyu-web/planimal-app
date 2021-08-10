import React from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CustomeBtn from "../UIkit/CustomeBtn";
import { setCartItems } from "../../features/cartSlice";
import { selectCurrentItem } from "../../features/itemSlice";

const ProductDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);
  const itemId = currentItem._id;
  console.log(currentItem);

  const handleDelete = async () => {
    await Axios.delete(`http://localhost:2000/items/${itemId}`);
    history.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="product_detail">
        <div>
          <img
            src={`/assets/uploads/${currentItem.image}`}
            alt="plant"
            className="w-96"
          />
        </div>
        <div className="ml-20 flex flex-col justify-center">
          <div className="">
            <h3>{currentItem.title}</h3>
            <h5 className="mt-3 text-gray-500">
              {currentItem.retailPrice} CAD
            </h5>
            <h4 className="mt-5">Description</h4>
            <p className="mt-2">{currentItem.description}</p>
            <div className="mt-10">
              <CustomeBtn
                className="customeBtn border-red-300 bg-red-300 text-white"
                button="ADD ITEM"
                onClick={() => dispatch(setCartItems())}
              />
            </div>
            <p className="text-gray-500 mt-1">{currentItem.qty} left</p>
            <div className="mt-10">
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                className="mr-3 cursor-pointer"
                onClick={handleDelete}
              />
              <Link to={`/edit-product/${itemId}`}>
                <FontAwesomeIcon
                  icon={faPen}
                  size="sm"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
