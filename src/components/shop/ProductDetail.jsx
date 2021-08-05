import React from "react";
import { useDispatch } from "react-redux";

import Plant from "../../img/plant-1.jpeg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CustomeBtn from "../UIkit/CustomeBtn";
import { setCartItems } from "../../features/cartSlice";

const ProductDetail = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div className="product_detail">
        <div className="">
          <img src={Plant} alt="plant" className="w-30rem" />
        </div>
        <div className="ml-20 flex flex-col justify-center">
          <h3>Title</h3>
          <h5 className="mt-3 text-gray-500">20.00 CAD</h5>
          <h4 className="mt-5">description</h4>
          <p className="mt-2">
            This dreamy dress is inspired by trips to Morocco. A simple V-neck
            dress with 3/4 sleeves that's perfect for lounging, feeling
            luxurious or not wanting to fuss all year long.
          </p>
          <div className="mt-10">
            <CustomeBtn
              className="customeBtn border-red-300 bg-red-300 text-white"
              button="ADD ITEM"
              onClick={() => dispatch(setCartItems(item))}
            />
          </div>
          <p className="text-gray-500 mt-1">2 left</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
