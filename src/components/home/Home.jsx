import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import NewsLetter from "../newsletter/NewsLetter";
import Shop from "../shop/Shop";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Shop />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
