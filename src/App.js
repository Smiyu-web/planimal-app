import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import Home from "./components/home/Home";
import Signup from "./components/navbar/account/Signup";
import Login from "./components/navbar/account/Login";
import AddProduct from "./components/shop/AddProduct";
import EditProduct from "./components/shop/EditProduct";
import ProductDetail from "./components/shop/ProductDetail";
import { login, selectCurrentUser } from "../src/features/userSlice";
import AddTags from "./components/shop/AddTags";
import MenuHamburger from "./components/navbar/hamburger/MenuHamburger";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:2000/users/tokenIsValid",
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        Axios.get("http://localhost:2000/users/", {
          headers: { "x-auth-token": token },
        })
          .then((response) => {
            // console.log(response.data);
            dispatch(login({ user: response.data.users, token: token }));
          })
          .catch((err) => console.log(err));
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product/:id" component={EditProduct} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/addtags" component={AddTags} />
          <Route path="/menu" component={MenuHamburger} />
        </div>
      </Router>
    </div>
  );
}

export default App;
