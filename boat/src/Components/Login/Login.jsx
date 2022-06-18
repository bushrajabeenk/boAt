import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 505px;
  background-color: var(--darkest-gray);
  padding-bottom: 30px;
  border: 0.1px solid black;
  color: var(--white);

  input {
    background-color: #141414;
    border-radius: 5px;
    color: white;
  }
  a {
    color: #ea2127 !important;
    font-weight: 700;
    text-decoration: underline;
  }
  .cont {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  .cont2 {
    margin-left: auto;
    margin-right: auto;
    width: 420px;
    max-width: 100%;
    margin-top: 30px;
  }
  .heading {
    margin: 10px 0px 40px;
  }
  .heading > h2 {
    text-align: center;
    margin: 0 0 10px;
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2em;
  }
`;

const Form = styled.form`
  .socials {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .socials div {
    margin: 5px;
  }
  .socials img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: auto;
    display: block;
  }
  .login-email,
  .login-password {
    margin-bottom: 20px;
    height: 52px;
  }

  .login-email,
  .login-password {
    width: 452px;
  }
  label {
    display: block;
    font-size: 16px;
    line-height: 1.4em;
    margin-bottom: 8px;
  }
  .login-email > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
    box-sizing: border-box;
  }
  .text-over-input {
    position: relative;
    display: block;
  }
  .text-over-input > input {
    width: 100%;
    font-size: 16px;
    line-height: 16px;
    border: 1px solid #d8d8d8;
    padding: 11px 15px;
    vertical-align: middle;
    max-width: 100%;
  }
  .forgot-password {
    position: absolute;
    top: 50%;
    right: 20px;
    line-height: 1em;
    margin-top: -0.5em;
    margin-left: -20px;
    font-size: 12.8px;
    transition: color 0.1s, border-color 0.1s;
    text-decoration: none;
  }
  .forgot-password:hover {
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
  }
  input:focus {
    border-color: #000;
  }
  .action-bottom {
    margin-top: 27px;
    width: 452px;
    height: 52px;
  }
  .action-bottom > p {
    margin-bottom: 1em;
    font-weight: 500;

    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  .action-bottom > p > input {
    font-weight: 700;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    background: red;
    border: 1px solid red;
    font-size: 16px;
    line-height: 1em;
    height: auto;
    margin: 0;
    padding: 11px 25px;
    vertical-align: middle;
    text-align: center;
    color: white;
    transition: background-color 0.1s, color 0.1s, border-color 0.1s,
      opacity 0.1s;
    display: inline-block;
  }
  .action-bottom > a {
    display: block;
    margin: 10px 0;
    text-align: center;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;
    font-size: inherit;
    letter-spacing: 1px;
  }
  .action-bottom > a > span {
    color: var(--black);
  }
  .action-bottom > a > span:hover {
    text-decoration: underline;
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
    transition: color 0.1s, border-color 0.1s;
  }
`;

export const Login = () => {
  const [cred, setCred] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var credData = JSON.parse(localStorage.getItem("Creds")) || [];
    console.log("credData:", credData);

    if (credData.email === cred.email && credData.password === cred.password) {
      alert("Login Successful");
      navigate("/");
    } else if (credData.length === 0) {
      alert("Please Create Account first.");
    } else {
      alert("Wrong cred");
    }
  };

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h2>Login</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <div className="socials">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/originals/91/4d/e6/914de662ac57138cda4a401ff37b444e.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="login-email">
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                type="email"
                id="customer_email"
              />
            </div>
            <div className="login-password">
              <div className="text-over-input">
                <input
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  type="password"
                  id="customer_password"
                />
              </div>
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Login" className="btn" />
              </p>
              <div style={{ textAlign: "center" }}>
                New customer?
                <Link to="/account/signup">
                  <span style={{ marginLeft: "125px" }}>Create an account</span>{" "}
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};
