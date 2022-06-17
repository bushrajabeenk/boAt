import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCDataFunc,
  deleteCDataFunc,
  inc_count,
  dec_count,
} from "./../../Store/cart/cart.actions";
import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CartContainer = styled.div`
  background: var(--white);

  .left {
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
`;

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const checkout = () => {
    navigate("/payment");
  };

  const contShopping = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
    dispatch(deleteCDataFunc(id));
  };

  let totAmnt = 0;
  cartData?.map(
    (el) =>
      (totAmnt += Math.floor(
        el.original_price - (el.original_price * el.discount) / 100
      )) *
      ((100 - Number(el.discount)) / 100)
  );

  console.log(totAmnt);

  useEffect(() => {
    dispatch(getCDataFunc());
  }, [dispatch]);

  return (
    <div>
      <CartContainer>
        <h1>Your Cart ({cartData.length || 0}) items</h1>
        <p>
          Free Shipping sitewide | <b>Cash On Delivery</b> available for order
          value upto ₹3000
        </p>
        <div className="top">
          {cartData.map((cartD) => {
            return (
                <div key={cartD.id}>
                  <div className="prod-img">
                    <img src={cartD.image[0]} alt="" />
                  </div>
                  <div>
                    <div className="prod-name">{cartD.name}</div>
                    <div className="prod-price">
                      {Math.floor(
                        cartD.original_price -
                          (cartD.original_price * cartD.discount) / 100
                      )}
                      <span className="prod-origprice">
                        {cartD.original_price}
                      </span>
                    </div>
                    <div>
                      <div className="prod-qtydec">
                        <button onClick={dec_count}>-</button>
                      </div>
                      <div className="prod-qty">{cartData.count}</div>
                      <div className="prod-qtyinc">
                        <button onClick={inc_count}>+</button>
                      </div>
                      <div className="prod-color">{cartD.color[0]}</div>
                      <div className="prod-delete">
                        <button onClick={() => handleDelete(cartD.id)}>
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              
            );
          })}
        </div>
        <div className="bottom">
          <div>
            <div>
              <b>Shipping</b>
            </div>
            <div>
              <b>FREE</b>
            </div>
          </div>
          <div>
            <div>
              <b>Total</b>
            </div>
            <div>
              <b>Rs {totAmnt.toFixed(2)}</b>
            </div>
          </div>
          <div>Or 3 interest-free payment of 1499 with Zest</div>
          <div onClick={contShopping}>Continue Shopping</div>
          <div onClick={checkout}>CASH ON DELIVERY</div>
          <div onClick={checkout}>PAY VIA CARD/OTHERS</div>
        </div>
      </CartContainer>
    </div>
  );
};

export default Cart;
