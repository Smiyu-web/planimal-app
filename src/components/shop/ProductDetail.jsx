import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Plant from "../../img/plant-1.jpeg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CustomeBtn from "../UIkit/CustomeBtn";
import { setCartItems } from "../../features/cartSlice";
import { selectCurrentItem } from "../../features/itemSlice";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);
  console.log(currentItem);

  return (
    <div>
      <Navbar />
      <div className="product_detail">
        <div>
          <img
            src={`/assets/uploads/${currentItem.image}`}
            alt="plant"
            className="w-30rem"
          />
        </div>
        <div className="ml-20 flex flex-col justify-center">
          <h3>{currentItem.title}</h3>
          <h5 className="mt-3 text-gray-500">{currentItem.retailPrice} CAD</h5>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
