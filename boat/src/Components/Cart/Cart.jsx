import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataFunc,
  postDataFunc,
  patchDataFunc,
  deleteDataFunc,
} from "./../../Store/cart/cart.actions";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFunc());
  }, [dispatch]);

  return <div></div>;
};

export default Cart;
