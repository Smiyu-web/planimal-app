import React from "react";
import Slider from "react-slick";
import Cactus from "../../img/cactus.jpeg";
import Bonsai from "../../img/bonsai.jpeg";
import Monstera from "../../img/monstera.jpeg";

import ImageWrapper from "./ImageWrapper";

const HeroSlider = () => {
  const settings = {
    arrows: false,
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
      <Slider {...settings}>
        <ImageWrapper image={Cactus} />
        <ImageWrapper image={Bonsai} />
        <ImageWrapper image={Monstera} />
      </Slider>
    </div>
  );
};

export default HeroSlider;
