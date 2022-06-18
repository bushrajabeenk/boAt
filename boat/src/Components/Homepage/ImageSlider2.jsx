import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import img21 from "./../../Assets/slider-img21.webp";
import img22 from "./../../Assets/slider-img22.webp";
import img23 from "./../../Assets/slider-img23.webp";

const Container = styled.div`
  width: 100%;
  height: 570px;
  margin-bottom: 330px;

  .heading {
    color: white;
    margin-bottom: 50px;
  }

  .imgslide {
    border-radius: 15px;
  }
`;

const images = [{ url: img21 }, { url: img22 }, { url: img23 }];

export const ImageSlider2 = () => {
  return (
    <Container>
      <div className="heading">
        <h1>New Launches</h1>
      </div>
      <SimpleImageSlider
        width={"60%"}
        height={"100vh"}
        images={images}
        showBullets={false}
        showNavs={true}
        style={{ cursor: "pointer", margin: "auto" }}
        navSize={60}
        navMargin={-10}
        navStyle={{ color: "red" }}
        className="imgslide"
      />
    </Container>
  );
};
