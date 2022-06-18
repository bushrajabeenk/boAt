import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// importing Custom sub-Components
import { Collection, SearchResults } from "./NavHover";


// importing assets
import logo from "./../../Assets/boat-logo.svg";
import downArrowIcon from "./../../Assets/down-arrow-icon.svg";
import searchIcon from "./../../Assets/search-icon.svg";
import couponIcon from "./../../Assets/coupon-icon.svg";
import avatarIcon from "./../../Assets/avatar-icon.svg";
import cartIcon from "./../../Assets/cart-icon.svg";
import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";


const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 88px;
  background: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  
  .bottomAnimation {
    display: inline-block;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 1.1rem;
 }
 
 .bottomAnimation::after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background: rgb(255, 255, 255);
    transition: width .3s;
 }
 
 .bottomAnimation:hover::after {
    width: 100%;
    transition: width .3s;
 }

  span,
  img {
    cursor: pointer;
  }

  & > div:nth-child(1) {
    width: 216px;
  }

  & > div:nth-child(2) {
    width: 390px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span:nth-child(1) {
      font-weight: 500;
      font-size: 16px;
    }

    > span:nth-child(3) {
      color: ${(props) => (props.flag ? "red" : "inherit")};
    }

    img {
      //down tick for shop and more
      margin-bottom: 2px;
    }

    > span {
      font-weight: 200;
      font-size: 15px;
      position: relative;
      transition: all 0.2s ease;
    }

    > span:nth-child(4)::after {
      display: none;
    }

    > span:nth-child(1) {
      /* transition: all 1s ease; */
    }

    > span:nth-child(1) .navbar-collection {
      position: fixed;
      background: var(--black-gradient);
      width: 100%;
      height: 650px;
      visibility: hidden;
      opacity: 0;
      top: 0px;
      left: 0;
      border-top: 88px solid transparent;
      z-index: -10;
      transition: all 0.5s ease;
    }

    > span:nth-child(1):hover .navbar-collection {
      visibility: visible;
      opacity: 1;
      /* transition: all 0.5s ease; */
    }
  }

  & > div:nth-child(3) {
    width: 380px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & img {
      margin-top: 3px;
    }
  }
`;

const SearchBox = styled.div`
  width: 235px;
  height: 40px;
  border-radius: 19px;
  background: var(--white);
  display: flex;
  align-items: center;
  padding: auto 18px;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  position: relative;

  & img {
    margin-left: 18px;
    margin-right: 8px;
  }
  input {
    border: none;
  }

  input ~ .search-results {
    position: fixed;
    width: 235px;
    height: 230px;
    top: 60px;
    background: var(--black-gradient);
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease 0.5s;
  }
  input:focus ~ .search-results {
    visibility: visible;
    opacity: 1;
  }
`;

const NavbarSpaceHolder = styled.div`
  height: 88px;
`;

const Navbar = () => {
  

  const cartData = useSelector((state) => state.cart.cartData);

  return (
    <>
      <NavContainer>
        <div className="boat-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <span className="bottomAnimation">
            Shop <img src={downArrowIcon} alt="arrow-Icon" />
            <Collection className="navbar-collection" />
          </span>

          <span className="bottomAnimation" >Offer Zone</span>

          <span className="bottomAnimation">
            More <img src={downArrowIcon} alt="arrow-Icon" />
          </span>
        </div>

        <div>
          <SearchBox>
            <img src={searchIcon} alt="search" />
            <input type="text" placeholder="Search..." />
            <SearchResults />
          </SearchBox>

          <div>
            <Link to="/account/login">
              <img src={avatarIcon} alt="avatarIcon" />
            </Link>
          </div>

          <div>
            <Link to="/coupon">
              <img src={couponIcon} alt="couponIcon" />
            </Link>
          </div>

          <div>
            <Link to="/cart">
              <div>
                <img src={cartIcon} alt="cartIcon" />
                {cartData.length}
              </div>
            </Link>
          </div>
          
        </div>
      </NavContainer>
      <NavbarSpaceHolder></NavbarSpaceHolder>
    </>
  );
};

export default Navbar;
