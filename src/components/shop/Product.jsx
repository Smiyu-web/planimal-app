import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

import CustomeBtn from "../UIkit/CustomeBtn";
import { setListItems, selectListItems } from "../../features/itemSlice";
import { setCartItems } from "../../features/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListItems);

  // const [lists, setLists] = useState([]);

  useEffect(async () => {
    try {
      const result = await Axios("http://localhost:2000/items");
      dispatch(setListItems(result.data));
      // setLists(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {lists?.map((item) => {
        return (
          <Link to={`/product/${item._id}`} item={item}>
            <div key={item._id} className="w-52 m-12 cursor-pointer">
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
                    onClick={() => dispatch(setCartItems(item))}
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
