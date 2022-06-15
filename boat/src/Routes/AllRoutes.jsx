import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./../Components/Homepage/Homepage";
import Login from "./../Components/Login-Signup/Login";
import Signup from "./../Components/Login-Signup/Signup";
import Payments from "./../Components/Payments/Payments";
import Products from "./../Components/Products/Products";
import Cart from "./../Components/Cart/Cart";
import Collections from "./../Components/Collections/Collections";
import Error from "./../Components/Error/Error";
import Success from "./../Components/Success/Success";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/account/login" element={<Login />}></Route>

        <Route path="/account/signup" element={<Signup />}></Route>

        <Route path="/products/:productName" element={<Products />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/payment" element={<Payments />}></Route>

        <Route exact path="/successful" element={<Success />}></Route>

        <Route
          path="/collections/:collectionName"
          element={<Collections />}
        ></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
