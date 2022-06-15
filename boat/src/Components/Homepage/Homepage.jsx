import React from "react";
import { ImageSlider } from "./ImageSlider";
import { FirstProdSlider } from "./FirstProdSlider";
import { SecondProdSlider } from "./SecondProdSlider";
import { ImageSlider2 } from "./ImageSlider2";
import { ThirdProdSlider } from "./ThirdProdSlider";
import { FourProdSlider } from "./FourProdSlider";
import { FiveProdSlider } from "./FiveProdSlider";
import { SixProdSlider } from "./SixProdSlider";
import { Blogs } from "./Blogs/Blogs";

const Homepage = () => {
  return (
    <div>
      <ImageSlider />
      <FirstProdSlider />
      <SecondProdSlider />
      <ImageSlider2 />
      <ThirdProdSlider />
      <FourProdSlider />
      <FiveProdSlider />
      <SixProdSlider />
      <Blogs />
    </div>
  );
};

export default Homepage;
