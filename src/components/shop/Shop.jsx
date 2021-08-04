import React from "react";
import Product from "./Product";

const Shop = () => {
  return (
    <div>
      <h2 className="mt-20">SHOP</h2>
      <div className="flex flex-wrap justify-center">
        <Product />
      </div>
    </div>
  );
};

export default Shop;
