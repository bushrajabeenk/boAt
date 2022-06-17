import styled from "styled-components";
import { ProductCard } from "./../Products/ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 500px;

  .heading {
    color: white;
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

export function SixProdSlider() {
  const [sixprodSlider, setsixprodSlider] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await axios.get(
        `https://my-boat-data.herokuapp.com/sixprodSlider`
      );
      let data = await r.data;
      //console.log(data);
      setsixprodSlider(data);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <div className="heading">
        <h1>Gaming</h1>
      </div>
      <div className="data-grid">
        {sixprodSlider.map((el) => (
          <ProductCard key={el.id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
