import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

import { addItem } from "../../redux/cart/cart.action";
import CustomBtn from "../UIkit/CustomBtn";
import { setListItems, selectListItems } from "../../features/itemSlice";

const Product = ({ addItemProps, item }) => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListItems);

  useEffect(async () => {
    try {
      // setLoading(true);
      const result = await Axios("http://localhost:2000/items/");
      dispatch(setListItems(result.data));
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {lists?.map((item) => {
        console.log(item.id);
        return (
          <div key={item.id} className="w-52 m-12">
            <div className="product">
              <div className="product_img">
                <img src={item.image} alt="cafe" className="product_img" />
              </div>
              <div className="product_btn">
                <CustomBtn
                  button="ADD ITEM"
                  onClick={() => addItemProps(item)}
                />
              </div>
            </div>

            <div className="flex justify-between mx-2 mt-2">
              <h3>{item.title}</h3>
              <h3>${item.retailPrice}</h3>
            </div>
            <h6 className="text-primary ml-1">{item.brand}</h6>
          </div>
        );
      })}
    </>
  );
};

export default Product;
