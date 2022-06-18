import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./../Components/Homepage/Homepage";
import Error from "./../Components/Error/Error";
import Success from "./../Components/Success/Success";
import Cart from "./../Components/Cart/Cart";
import { Login } from "./../Components/Login/Login";
import { Signup } from "../Components/Signup/Signup";
import Checkout from "./../Components/Payments/Checkout";
import Payments from "./../Components/Payments/Payments";
import GetOTP from "./../Components/Payments/GetOTP";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/account/login" element={<Login />}></Route>

        <Route path="/account/signup" element={<Signup />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>

        <Route path="/payments" element={<Payments />}></Route>

        <Route path="/getotp" element={<GetOTP />}></Route>

        <Route exact path="/success" element={<Success />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
