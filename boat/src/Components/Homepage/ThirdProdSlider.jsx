import styled from "styled-components";
import { ProductCard } from "./../Products/ProductCard";

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
  const temp = [
    {
      id: 23,
      name: "boAt Watch Wave Pro",
      category: "SMART WATCHES",
      rating: 5.0,
      reviews: 10,
      original_price: 6990,
      discount: 53,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_eaf60560-3afb-4dda-b4c0-598078f7ce72_600x.png?v=1647767874",
      ],
      color: ["Blue", "Black", "Maroon"],
    },
    {
      id: 24,
      name: "boAt Watch Flash",
      category: "SMART WATCHES",
      rating: 4.8,
      reviews: 43,
      original_price: 6990,
      discount: 64,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
      ],
      color: ["Red", "Blue"],
    },
    {
      id: 25,
      name: "boAt Storm",
      category: "SMART WATCHES",
      rating: 4.8,
      reviews: 912,
      original_price: 5990,
      discount: 58,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1bca7fb9-5f5c-42e3-930a-8a430d8a9e60_600x.png?v=1625046217",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/485ea9aa-b170-4efc-ac40-ab8b0854083c_600x.png?v=1625044988",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8f01d1e9-48f4-4e55-886d-0b255b9bbf24_600x.png?v=1625045855",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a09a67f0-75bd-42b8-8f0d-58ffad51e03b_600x.png?v=1625045372",
      ],
      color: ["Red", "Green", "CoolGrey", "MidnightBlue", "Black"],
    },
    {
      id: 26,
      name: "‌boAt Watch Xtend‌",
      category: "SMART WATCHES",
      rating: 4.8,
      reviews: 108,
      original_price: 7990,
      discount: 60,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainred_600x.png?v=1640237576",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mainblack_600x.png?v=1640237575",
      ],
      color: ["Sporty Blue", "Red", "Active Black"],
    },
  ];

  return (
    <Container>
      <div className="heading">
        <h1>Trending Wireless</h1>
      </div>
      <div className="data-grid">
        {temp.map((el) => (
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}