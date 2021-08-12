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
import { login } from "../../features/userSlice";

const ProductDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);
  const currentUser = useSelector(login);
  const itemId = currentItem._id;
  const tags = JSON.parse(currentItem.tags);
  const currentRole = currentUser.payload.user.currentUser.user?.role;

  const handleDelete = async () => {
    await Axios.delete(`http://localhost:2000/items/${itemId}`);
    history.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="product_detail">
        <div className="w-96">
          <img
            src={`/assets/uploads/${currentItem.image}`}
            alt="plant"
            className=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="">
            <h3>{currentItem.title}</h3>
            {!currentRole === "wholesale" ? (
              <h5 className="mt-3 text-gray-500">
                {currentItem.retailPrice} CAD
              </h5>
            ) : (
              <div className="flex mt-8">
                <ul className="mr-10">
                  <li>
                    <p className="font-medium">wholesale price</p>
                    <h4 className=" text-gray-500">
                      {currentItem.wholesalePrice} CAD
                    </h4>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p className="font-medium">retail price</p>
                    <h4 className="text-gray-500">
                      {currentItem.retailPrice} CAD
                    </h4>
                  </li>
                </ul>
              </div>
            )}

            <h4 className="mt-10">Description</h4>
            <p className="mt-2">{currentItem.description}</p>
            <ul className="mt-5 flex">
              {tags.length
                ? tags.map((tag) => (
                    <li key={tag.id} className="tag_li">
                      {tag.text}
                    </li>
                  ))
                : null}
            </ul>
            <div className="mt-10">
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
            {currentRole === "admin" ? (
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
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
