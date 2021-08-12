import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import CustomeBtn from "../UIkit/CustomeBtn";
import {
  setListItems,
  selectListItems,
  setCurrentItem,
} from "../../features/itemSlice";
// import { login } from "../../features/userSlice";
import { setCartItems } from "../../features/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const lists = useSelector(selectListItems);
  // const currentUser = useSelector(login);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 4,
  };

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

  // const addItemToCart = async (item) => {
  //   try {
  //     const itemId = item._id;
  //     const userId = currentUser.payload.user.currentUser.user._id;

  //     const newAddItem = { itemId, userId };

  //     await Axios.post("http://localhost:2000/cart/add-to-cart", newAddItem);
  //     console.log("added" + newAddItem);
  //   } catch (err) {
  //     console.log(err.response?.data.msg);
  //   }
  // };

  return (
    <div className="mx-20">
      <Slider {...settings}>
        {lists?.map((item) => {
          return (
            <div key={item._id}>
              <Link to={`/product/${item._id}`}>
                <div
                  className="w-56 m-12 cursor-pointer"
                  onClick={() => dispatch(setCurrentItem(item))}
                >
                  <div className="relative h-80">
                    <div>
                      <img
                        src={`/assets/uploads/${item.image}`}
                        alt={item.title}
                        className="w-full h-80"
                      />
                    </div>
                    <div className="product_btn">
                      <CustomeBtn
                        className="customeBtn bg-white text-primary border-primary"
                        button="ADD ITEM"
                        onClick={() => dispatch(setCartItems(item))}
                        // onClick={() => addItemToCart(item)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h5>{item.title}</h5>
                    <h4 className="mt-6 text-gray-600">${item.retailPrice}</h4>
                  </div>
                  <h6 className="text-primary ml-1">{item.brand}</h6>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Product;
