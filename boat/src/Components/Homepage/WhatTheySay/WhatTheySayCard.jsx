import React from "react";
import styled from "styled-components";

const WhatTheyCard = styled.div`
  width: 100%;
  margin: auto;

  & > div div {
    width: 85%;
    height: 150px;
    margin: auto;
    background: var(--red);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }

  & > div div p {
   margin-bottom: 30px;
  }

  & > div div button {
    background: var(--white);
    color: var(--red);
    border: none;
    padding: 10px 55px;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const WhatTheySayCard = ({ imgurl, tagline }) => {
  return (
    <WhatTheyCard>
      <div>
        <img src={imgurl} alt="tagline" />
        <div>
          <p>{tagline}</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </WhatTheyCard>
  );
};

export default WhatTheySayCard;
