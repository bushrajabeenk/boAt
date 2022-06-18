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
  margin: auto;
  width: 100%;

  .top {
    width: 20%;
    height: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 100px;
  }

  .prod-name{
    margin-bottom: 10px;
  }

  .prod-price{
    margin-bottom: 5px;
  }

  .prod-img > img {
    height: 200px;
    width: 200px;
  }

  .prod-origprice {
    font-size: 12px;
    text-decoration: line-through;
    margin-bottom: 10px;
  }

  .prod-qtydec > button{
    background-color: var(--red);
    border: none;
    height: 20px;
    width: 20px;
    color: var(--white);
  }

  .prod-qtyinc > button{
    background-color: var(--red);
    border: none;
    height: 20px;
    width: 20px;
    color: var(--white);
  }

  .midd {
    display: flex;
    justify-content: center;
  }

  .midd > div:nth-child(1) {
    margin-right: 10px;
  }

  .midd > div:nth-child(2) {
    margin-right: 10px;
  }

  .midd > div:nth-child(3) {
    margin-right: 10px;
  }
  
  .midd > div:nth-child(4) {
    margin-right: 10px;
  }
  .prod-delete > button {
    background-color: var(--red);
    border: none;
    height: 20px;
    width: 20px;
    color: var(--white);
  }

  //bottom

  .bottom {
    margin: auto;
    width: 50%;
  }

  .box {
    height: 40px;
    width: 250px;
    margin: auto;
    background-color: var(--red);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .cont {
    cursor: pointer;
  }

  .shipping {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .shipping > div:nth-child(1) {
    margin-right: 50px;
  }

  .total {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .total > div:nth-child(1) {
    margin-right: 50px;
  }

  .checkout-data {
    cursor: pointer;
  }
`;

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  const contShopping = () => {
    navigate("/");
  };

  const handleDelete = (id) => {
    dispatch(deleteCDataFunc(id));
  };

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

        {cartData?.map((cartD) => {
          return (
            <div key={cartD.id}>
              <div className="top">
                <div className="prod-img">
                  <img src={cartD.image[0]} alt="" />
                </div>
                <div>
                  <div className="prod-name">
                    <h2>{cartD.name}</h2>
                  </div>
                  <div className="prod-price">
                    <b>
                      Rs
                      {Math.floor(
                        cartD.original_price -
                          (cartD.original_price * cartD.discount) / 100
                      ) * count}
                    </b>
                    <span className="prod-origprice">
                      {" "}
                      Rs{cartD.original_price * count}
                    </span>
                  </div>
                  <div className="midd">
                    <div className="prod-qtydec">
                      <button onClick={() => dispatch(dec_count())}>-</button>
                    </div>
                    <div className="prod-qty">{count}</div>
                    <div className="prod-qtyinc">
                      <button onClick={() => dispatch(inc_count())}>+</button>
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
            </div>
          );
        })}
        <div className="bottom">
          <div className="shipping">
            <div>
              <b>Shipping</b>
            </div>
            <div>
              <b>FREE</b>
            </div>
          </div>
          <div className="total">
            <div>
              <b>Total</b>
            </div>
            <div>
              <b>
                Rs{" "}
                {cartData
                  .reduce((sum, item) => {
                    return (
                      sum +
                      Math.floor(
                        item.original_price -
                          (item.original_price * item.discount) / 100
                      ) *
                        count
                    );
                  }, 0)
                  .toFixed(2)}
              </b>
            </div>
          </div>
        </div>
        {/* <div>Or 3 interest-free payment of 1499 with Zest</div> */}
        <div className="box cont" onClick={contShopping}>
          Continue Shopping
        </div>
        <div className="box checkout-data" onClick={checkout}>
          CASH ON DELIVERY
        </div>
        <div className="box checkout-data" onClick={checkout}>
          PAY VIA CARD/OTHERS
        </div>
      </CartContainer>
    </div>
  );
};

export default Cart;
