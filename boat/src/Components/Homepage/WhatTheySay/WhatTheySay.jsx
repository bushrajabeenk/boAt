import React from "react";
import styled from "styled-components";
import WhatTheySayCard from "./WhatTheySayCard";

const Container = styled.div`
  background: var(--grey);
  width: 100%;
  height: 600px;
  margin: auto;
  color: var(--black);
  background: var(--grey2);
  margin-top: 50px;

  .heading {
    padding-top: 60px;
    color: var(--black);
    padding-bottom: 80px;
  }

  .data-flex {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;

const theySay = [
  {
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testi-1200_284x.png?v=1649980899",
    tagline: '"It is value for money, best sound especially bass"',
  },
  {
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-2_284x.png?v=1649668053",
    tagline: '"The battery backup is something unbelievable"',
  },
  {
    imgurl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/testimonial-img-3_284x.png?v=1649668053",
    tagline:
      '"Amazing product great sound quality and the mic performance is also awesome"',
  },
];

const WhatTheySay = () => {
  return (
    <Container>
      <div className="heading">
        <h1>What They Say About Us:</h1>
      </div>
      <div className="data-flex">
        {theySay.map(({ imgurl, tagline }) => (
          <WhatTheySayCard key={tagline} imgurl={imgurl} tagline={tagline} />
        ))}
      </div>
    </Container>
  );
};

export default WhatTheySay;
