import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import Home from "./components/home/Home";
import Signup from "./components/navbar/account/Signup";
import Login from "./components/navbar/account/Login";
import AddProduct from "./components/shop/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/add-product" component={AddProduct} />
        </div>
      </Router>
    </div>
  );
}

export default App;
