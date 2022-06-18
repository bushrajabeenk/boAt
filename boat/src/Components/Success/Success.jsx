import React from "react";
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div>
      <h1>Thank you for shopping!</h1>
      <Link to={"/"}>
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Success;
