import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CustomeBtn from "../UIkit/CustomeBtn";
import { setCartItems } from "../../features/cartSlice";
import { selectCurrentItem } from "../../features/itemSlice";
import { login } from "../../features/userSlice";
import ProductDrop from "./ProductDrop";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);
  const currentUser = useSelector(login);
  const tags = JSON.parse(currentItem.tags);
  const currentRole = currentUser.payload.user.currentUser.user?.role;

  return (
    <div>
      <Navbar />
      <div className="product_detail">
        <div className="w-80 lg:w-96">
          <img src={`/assets/uploads/${currentItem.image}`} alt="plant" />
        </div>
        <div className="flex flex-col justify-center mt-5 md:mt-0 mx-14 md:mx-0">
          <div>
            <div className="flex justify-between">
              <h3>{currentItem.title}</h3>
              {currentRole === "admin" ? (
                <ProductDrop itemId={currentItem._id} />
              ) : null}
            </div>
            {!currentRole === "wholesale" ? (
              <h4 className="mt-1 lg:mt-3 text-gray-500">
                {currentItem.retailPrice} CAD
              </h4>
            ) : (
              <div className="flex my-4 lg:my-8">
                <ul className="mr-10">
                  <li>
                    <p className="font-medium">wholesale price</p>
                    <h4 className="mt-1 lg:mt-3 text-gray-500">
                      {currentItem.wholesalePrice} CAD
                    </h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p className="font-medium">retail price</p>
                    <h4 className="mt-1 lg:mt-3 text-gray-500">
                      {currentItem.retailPrice} CAD
                    </h4>
                  </li>
                </ul>
              </div>
            )}

            <h4>Description</h4>
            <p className="mt-2 font-medium">{currentItem.description}</p>
            <ul className="my-5 flex flex-wrap gap-2">
              {tags.length
                ? tags.map((tag) => (
                    <li key={tag.id} className="tag_li">
                      {tag.text}
                    </li>
                  ))
                : null}
            </ul>
            <div>
              <CustomeBtn
                className="customeBtn border-red-300 bg-red-300 text-white"
                button="ADD ITEM"
                onClick={() => dispatch(setCartItems(currentItem))}
              />
            </div>
            {currentItem.qty ? (
              <p className="text-gray-500 mt-1">{currentItem.qty} left</p>
            ) : (
              <p className="text-gray-500 mt-1"> &infin;</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
