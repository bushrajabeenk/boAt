import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clear_data } from "../../Store/cart/cart.actions";

const GetOTPContainer = styled.div`
  .checkoutDiv {
    border: 1px solid rgb(199, 199, 199);
    width: 300px;
    margin: auto;
    margin-bottom: 50px;
    background-color: white;
    padding: 2%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .checkoutHeadDiv {
    text-align: center;
  }

  .checkoutHead {
    margin: 0px;
    font-size: 2rem;
    padding-bottom: 50px;
    color: red;
  }

  .checkoutDiv {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 16px;
    line-height: 1.4em;
    margin-bottom: 8px;
  }

  .checkoutDiv > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }

  input:focus {
    border-color: #000;
  }

  .checkoutBtn {
    min-width: 80%;
    height: 40px;
    border: none;
    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .backgroundColorOtp {
    background-color: rgb(20, 20, 20);
    width: 100%;
    height: 350px;
    padding-top: 50px;
  }
`;

const GetOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOtp = (e) => {
    // let otp = e.target.value;
    // if (otp.length === 5) {
    // navigate("/success");
    navigate("/");
    dispatch(clear_data());
    // } else {
    //   alert("Enter 5-digit OTP");
    // }
  };

  useEffect(() => {
    alert("Please Enter the OTP");
  }, []);

  return (
    <GetOTPContainer>
      <div className="backgroundColorOtp">
        <div className="checkoutDiv">
          <div className="checkoutHeadDiv">
            <h2 className="checkoutHead">Enter OTP</h2>
          </div>
          <input type="number" />
          <br />
          <button onClick={handleOtp} className="checkoutBtn">
            Submit
          </button>
        </div>
      </div>
    </GetOTPContainer>
  );
};

export default GetOTP;
