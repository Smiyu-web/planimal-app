import React from "react";
import Slider from "react-slick";
import Cactus from "../../assets/img/cactus.jpeg";
import Top from "../../assets/img/planimal-top.jpeg";

import ImageWrapper from "./ImageWrapper";

const HeroSlider = () => {
  const settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 9000,
  };
  return (
    <div className="mt-32">
      <Slider {...settings} className="">
        <ImageWrapper image={Cactus} />
        <ImageWrapper image={Top} />
      </Slider>
    </div>
  );
};

export default HeroSlider;
