import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 625px;
  background-color: var(--darkest-gray);
  color: var(--white);
  border: 0.1px solid black;
  input {
    background-color: #141414;
    color: white;
    border-radius: 5px;
  }
  .cont {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 40px;
    padding-left: 40px;
  }
  .cont2 {
    margin-left: auto;
    width: 420px;
    max-width: 100%;
    margin-right: auto;
    margin-top: 30px;
  }
  .heading {
    margin: 10px 0px 40px;
  }
  .heading > h2 {
    text-align: center;
    margin: 0 0 10px;
    line-height: 1.2em;
    font-size: 30px;
    font-weight: 600;
  }
`;

const Form = styled.form`
  .socials > iframe {
    max-width: 100%;
    width: 100%;
    margin-bottom: 5px;
    border: 0px;
    height: 50px;
    padding-top: 0px;
  }
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
  .input-box,
  .login-password {
    margin-bottom: 20px;
  }
  label {
    display: block;
    font-size: 16px;
    line-height: 1.4em;
    margin-bottom: 8px;
  }
  .input-box > input {
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
  .socials img {
    height: 30px;
    width: 30px;
  }
  .action-bottom {
    margin-top: 27px;
  }
  .action-bottom > p {
    margin-bottom: 1em;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  .action-bottom > p > input {
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    background-color: red;
    width: 100%;
    border: 1px solid red;
    font-size: 16px;
    font-weight: 700;
    height: auto;
    line-height: 1em;
    margin: 0;
    padding: 11px 25px;
    vertical-align: middle;
    text-align: center;
    display: inline-block;
    color: white;
    transition: background-color 0.1s, color 0.1s, border-color 0.1s,
      opacity 0.1s;
  }
  .action-bottom > span {
    display: block;
    margin: 10px 0;
    text-align: center;
    text-decoration: none;
    transition: color 0.1s, border-color 0.1s;
    font-size: inherit;
    letter-spacing: 1px;
  }
  .action-bottom > span > a {
    color: var(--black);
  }
  .action-bottom > span > a:hover {
    text-decoration: underline;
    cursor: pointer;
    color: red;
    text-decoration: underline;
    background-color: transparent;
    transition: color 0.1s, border-color 0.1s;
  }
`;

export const Signup = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const postData = async () => {
    alert("Account Created Successfully");
    localStorage.setItem("Creds", JSON.stringify(data));
    navigate("/account/login");
  };

  return (
    <Container>
      <div className="cont">
        <div className="cont2">
          <div className="heading">
            <h2>Register User</h2>
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
            <div className="input-box">
              <input
                placeholder="First Name"
                required
                name="first_name"
                onChange={handleChange}
                type="text"
                id="customer_name"
              />
            </div>
            <div className="input-box">
              <input
                required
                placeholder="Last name"
                name="last_name"
                onChange={handleChange}
                type="text"
                id="customer_lname"
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Email"
                required
                name="email"
                onChange={handleChange}
                type="email"
                id="customer_email"
              />
            </div>
            <div className="input-box">
              <input
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
                type="password"
                id="customer_password"
              />
            </div>
            <div className="action-bottom">
              <p>
                <input type="submit" value="Create" />
              </p>
              <span>
                Already have an account ?&nbsp;
                <Link to="/account/login">Login</Link>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};
