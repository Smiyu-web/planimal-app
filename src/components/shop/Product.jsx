import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";

import CustomeBtn from "../UIkit/CustomeBtn";
import {
  setListItems,
  selectListItems,
  setCurrentItem,
} from "../../features/itemSlice";
import { login } from "../../features/userSlice";

const Product = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListItems);
  const currentUser = useSelector(login);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await Axios("http://localhost:2000/items");
        dispatch(setListItems(result.data));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const addItemToCart = async (item) => {
    try {
      const itemId = item._id;
      const userId = currentUser.payload.user.currentUser.user._id;

      const newAddItem = { itemId, userId };

      await Axios.post("http://localhost:2000/cart/add-to-cart", newAddItem);
      console.log("added" + newAddItem);
    } catch (err) {
      console.log(err.response?.data.msg);
    }
  };

  return (
    <>
      {lists?.map((item) => {
        return (
          <Link to={`/product/${item._id}`} key={item._id}>
            <div
              key={item._id}
              className="w-52 m-12 cursor-pointer"
              onClick={() => dispatch(setCurrentItem(item))}
            >
              <div className="product">
                <div className="product_img">
                  <img
                    src={`/assets/uploads/${item.image}`}
                    alt="cafe"
                    className="product_img"
                  />
                </div>
                <div className="product_btn">
                  <CustomeBtn
                    className="customeBtn bg-white text-primary border-primary"
                    button="ADD ITEM"
                    // onClick={() => dispatch(setCartItems(item))}
                    onClick={() => addItemToCart(item)}
                  />
                </div>
              </div>

              <div className="flex justify-between mx-2 mt-2">
                <h3>{item.title}</h3>
                <h3>${item.retailPrice}</h3>
              </div>
              <h6 className="text-primary ml-1">{item.brand}</h6>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Product;
