import styled from "styled-components";

const BCardContainer = styled.div`
  width: 93%;
  margin: auto;
  margin-top: 30px;

  & > img {
    max-width: 100%;
    cursor: pointer;
    overflow: hidden;
    transition: transform 1s ease;
  }
  & > img:hover {
    max-width: 100%;
    transform: scale(1.03);
  }

  & > h3 {
    margin-top: 20px;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.1px;
    height: 74px;
    text-align: left;
    cursor: pointer;
  }
  & > h3:hover {
    color: var(--red);
  }
`;

export const BlogsCard = ({ bThumb, bTitle }) => {
  return (
    <div>
      <BCardContainer>
        <img src={bThumb} alt={bTitle} />
        <h3>{bTitle}</h3>
      </BCardContainer>
    </div>
  );
};
