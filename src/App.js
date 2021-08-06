import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import Home from "./components/home/Home";
import Signup from "./components/navbar/account/Signup";
import Login from "./components/navbar/account/Login";
import AddProduct from "./components/shop/AddProduct";
import ProductDetail from "./components/shop/ProductDetail";
import { login } from "../src/features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        `http://localhost:2000/users/tokenIsValid`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      if (tokenRes.data) {
        Axios.get(`http://localhost:2000/users/`, {
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
          <Route path="/product/:id" component={ProductDetail} />
        </div>
      </Router>
    </div>
  );
}

export default App;
