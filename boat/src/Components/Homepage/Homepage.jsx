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
import BoatHeads from './BoatHeads/BoatHeads';
import WhatTheySay from './WhatTheySay/WhatTheySay';
import AfterPress from "./AfterPress";

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
      <BoatHeads />
      <WhatTheySay />
      <AfterPress />
    </div>
  );
};

export default Homepage;
