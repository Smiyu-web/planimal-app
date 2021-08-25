import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";

import CustomeBtn from "../UIkit/CustomeBtn";
import {
  setListItems,
  selectListItems,
  setCurrentItem,
} from "../../features/itemSlice";
import { selectCurrentUser } from "../../features/userSlice";
import { setCartItems } from "../../features/cartSlice";
import Loading from "../UIkit/Loading";

const Product = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const lists = useSelector(selectListItems);
  const currentUser = useSelector(selectCurrentUser);

  console.log(currentUser);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const result = await Axios(`${process.env.REACT_APP_SERVER_URL}/items`);

        dispatch(setListItems(result.data));
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <div className="product">
          {lists?.map((item) => {
            return (
              <div key={item._id}>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    dispatch(setCurrentItem(item));
                    history.push(`/product/${item._id}`);
                  }}
                >
                  <div className="relative h-56 md:h-80">
                    <div>
                      <img
                        src={`/assets/uploads/${item.image}`}
                        alt={item.title}
                        className="w-full h-56 md:h-80"
                      />
                    </div>
                    {currentUser === "" ? (
                      <Link to="/signup">
                        <div className="product_btn">
                          <CustomeBtn
                            className="customeBtn bg-white text-primary border-primary"
                            button="ADD ITEM"
                            onClick={() => dispatch(setCartItems(item))}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="product_btn">
                        <CustomeBtn
                          className="customeBtn bg-white text-primary border-primary"
                          button="ADD ITEM"
                          onClick={(e) => {
                            dispatch(setCartItems(item));
                            // e.stopPropagation();
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between mt-2">
                    <h5>{item.title}</h5>
                    <h4 className="mt-6 text-gray-600">${item.retailPrice}</h4>
                  </div>
                  <h6 className="text-primary ml-1">{item.brand}</h6>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Product;
