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
  // const temp = [
  //   {
  //     id: 23,
  //     name: "boAt Immortal 700",
  //     category: "HEADPHONES",
  //     rating: 5.0,
  //     reviews: 10,
  //     original_price: 6990,
  //     discount: 64,
  //     isAvailable: true,
  //     image: [
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_33ed4e4f-8ef4-4c8a-a0c7-68216dfafa4a_600x.png?v=1643477993",
  //     ],
  //     color: ["Black Sabre"],
  //   },
  //   {
  //     id: 24,
  //     name: "boAt Immortal 1000D",
  //     category: "HEADPHONES",
  //     rating: 4.9,
  //     reviews: 12,
  //     original_price: 5990,
  //     discount: 62,
  //     isAvailable: true,
  //     image: [
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_f3aa2756-01f3-4e39-80bc-7b4f6551c7aa_600x.png?v=1625748159",
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_green_551e0f56-cb9c-4910-be88-3c9fd1383c50_600x.png?v=1652363760",
  //     ],
  //     color: ["White Sabre", "Black Sabre", "Green"],
  //   },
  //   {
  //     id: 25,
  //     name: "boAt Immortal 1300",
  //     category: "HEADPHONES",
  //     rating: 4.8,
  //     reviews: 8,
  //     original_price: 9990,
  //     discount: 71,
  //     isAvailable: true,
  //     image: [
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_600x.png?v=1632715016",
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_4_600x.png?v=1632715015",
  //       "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_1_600x.png?v=1632715016",
  //     ],
  //     color: ["Red", "Black", "Blue", "White"],
  //   },
  //   {
  //     id: 26,
  //     name: "boAt Immortal 400",
  //     category: "HEADPHONES",
  //     rating: 4.5,
  //     reviews: 2,
  //     original_price: 6990,
  //     discount: 71,
  //     isAvailable: true,
  //     image: [
  //      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678"
  //     ],
  //     color: ["Black Sabre"],
  //   },
  // ];

  const [sixprodSlider, setsixprodSlider] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let r = await axios.get(`http://localhost:1001/sixprodSlider`);
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
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
