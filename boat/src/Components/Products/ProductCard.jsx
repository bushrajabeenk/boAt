import styled from "styled-components";
import { Link } from "react-router-dom";

const OuterCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: spcae-between;
  cursor: pointer;
`;

const CardContainer = styled.div`
  width: 330px;
  height: 400px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--gray);
`;

const InnerImgContainer = styled.div`
  width: 330px;
  height: 230px;
  background: var(--gray);
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;

  & > img {
    width: 210px;
    height: 210px;
    position: absolute;
    top: 10px;
    left: 55px;
    transition: all 0.5s ease;
  }

  &:hover > img:nth-child(2) {
    opacity: 0;
  }
`;

const CardData = styled.div`
  width: 310px;
  height: 170px;
  margin: auto;
  position: relative;
  background: var(--white);
  border: 1px solid transparent;
  border-radius: 12px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-bottom: 10px;

  & > .product-title {
    margin: auto;
    margin-top: 5px;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 14px;
  }

  & > .product-price {
    color: var(--red);
    margin: auto 6px 9px 18px;
    font-weight: bold;
    font-size: 14px;
    display: inline;
  }

  & > .product-original-price {
    color: var(--light-gray);
    display: inline;
    text-decoration-line: line-through;
    font-weight: 400;
    font-size: 10px;
  }

  & > .star-icon {
    width: 10px;
    height: 10px;
    // position: absolute;
    // top: 16px;
    // right: 42px;
  }

  & > .product-rating {
    // position: absolute;
    // top: 14px;
    // right: 22px;
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
  }

  & > .product-reviews {
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
  }
`;

const CardShopNowButton = styled.button`
  //   position: absolute;
  //   right: 22px;
  //   bottom: 32px;
  width: 92%;
  height: 35px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: var(--red);
  transition: all 0.2s ease;
  font-weight: bold;

  & > span {
    transform: translateY(-1px);
    letter-spacing: 1px;
    color: var(--white);
  }

  &:hover {
    background: var(--red);
  }
`;

export const ProductCard = ({ el }) => {
  const imageFlag = el.image.length > 1 ? true : false;

  return (
    <OuterCardContainer>
      <Link to={`/products/${el.name}`}>
        <CardContainer>
          <InnerImgContainer>
            <img src={el.image[0]} alt="img" />
            {imageFlag ? <img src={el.image[1]} alt="img" /> : true}
          </InnerImgContainer>
          <CardData>
            <p className="product-title">{el.name}</p>
            <p className="product-rating">
              <svg
                className="star-icon"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z"
                  fill="#FF0000"
                />
              </svg>
              {el.rating.toFixed(1)}
            </p>

            <p className="product-reviews">{el.reviews} reviews</p>

            <p className="product-price">
              ₹
              {Math.floor(
                el.original_price - (el.original_price * el.discount) / 100
              )}
            </p>
            <span className="product-original-price">₹{el.original_price}</span>
            <p>
              You Save: ₹{Math.floor((el.original_price * el.discount) / 100)}
              <span>({el.discount}%)</span>
            </p>
            <CardShopNowButton>
              <span>ADD TO CART</span>
            </CardShopNowButton>
          </CardData>
        </CardContainer>
      </Link>
    </OuterCardContainer>
  );
};
