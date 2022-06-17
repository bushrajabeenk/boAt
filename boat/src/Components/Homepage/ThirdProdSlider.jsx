import styled from "styled-components";
import { ProductCard } from "./../Products/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 540px;
  margin-bottom: 50px;

  .heading {
    color: white;
    margin-bottom: 110px;
  }

  .data-grid {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 100px);
    margin: auto;
    justify-content: space-evenly;
    margin-top: 40px;
    gap: 25px;
  }
`;

export function ThirdProdSlider() {
  const [threeprodSlider, setthreeprodSlider] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await axios.get(
        `https://my-boat-data.herokuapp.com/threeprodSlider`
      );
      let data = await r.data;
      //console.log(data);
      setthreeprodSlider(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="heading">
        <h1>Trending Wireless</h1>
      </div>
      <div className="data-grid">
        {threeprodSlider.map((el) => (
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
