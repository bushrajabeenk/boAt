import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  .checkoutDiv {
    border: 1px solid rgb(199, 199, 199);
    width: 500px;
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

  .backgroundColorPayment {
    background-color: rgb(20, 20, 20);
    width: 100%;
    height: 650px;
    padding-top: 50px;
  }
`;

const Payments = () => {
  const navigate = useNavigate();
  const sendOTP = () => {
    alert("OTP has been sent to your registered Mobile No.");
    navigate("/getotp");
  };
  return (
    <CardContainer>
      <div className="backgroundColorPayment">
        <div className="checkoutDiv">
          <div className="checkoutHeadDiv">
            <h2 className="checkoutHead">Payment Details</h2>
          </div>
          <label>Card Holder's Name</label>
          <input type="text" name="" id="" />
          <br/>
          <label>Card Number</label>
          <input type="number" name="" id="" />
          <br/>
          <label>CVV</label>
          <input type="number" name="" id="" />
          <br/>
          <label>Expiry Date</label>
          <input type="date" name="" id="" />
          <br/>
          <button className="checkoutBtn" onClick={sendOTP}>
            Submit
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default Payments;
