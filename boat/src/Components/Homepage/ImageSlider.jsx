import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "./../../Assets/slider-img-1.webp";
import img2 from "./../../Assets/slider-img-2.webp";
import img3 from "./../../Assets/slider-img-3.webp";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

export const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"70vh"}
        images={images}
        showBullets={false}
        showNavs={true}
        style={{ cursor: "pointer" }}
        navSize={60}
        navMargin={20}
      />
    </div>
  );
};
