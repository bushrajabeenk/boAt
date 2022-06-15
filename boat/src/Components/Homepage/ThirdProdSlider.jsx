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
      name: "boAt Rockerz 235 V2",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 1007,
      original_price: 2990,
      discount: 67,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5f7d33ad-39a9-4426-836e-c300814839b9_600x.png?v=1625046105",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48d16e65-e295-45ef-a59d-ee85f787001d_600x.png?v=1625044995",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/5324091f-9f39-463f-bf20-e603c796349c_600x.png?v=1625045742",
      ],
      color: ["Black", "IndianRed", "Royalblue", "Grey"],
    },
    {
      id: 24,
      name: "boAt Rockerz 245 V2",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 169,
      original_price: 2990,
      discount: 67,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_600x.png?v=1627276367",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_1_600x.png?v=1627276362",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_5_600x.png?v=1627276381",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_3_600x.png?v=1627276372",
      ],
      color: ["Ocean Blue", "Black", "Navy Blue", "Red"],
    },
    {
      id: 25,
      name: "boAt Rockerz 450",
      category: "BLUETOOTH HEADPHONES",
      rating: 4.8,
      reviews: 253,
      original_price: 3990,
      discount: 62,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_600x.png?v=1625045744",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ae22e3a6-9590-401a-94f6-d8ecf42b4932_600x.png?v=1625046351",
      ],
      color: ["Black", "Beige", "LightBlue"],
    },
    {
      id: 26,
      name: "‌boAt Rockerz 550‌",
      category: "BLUETOOTH HEADPHONES",
      rating: 4.8,
      reviews: 308,
      original_price: 4994,
      discount: 60,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/64576906-013d-4af9-828a-fc3c69482a8a_600x.png?v=1625046144",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48b829ed-bee6-492e-b9bc-1824d5c63bd4_600x.png?v=1625046144",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0d8d4561-6985-44ba-9e70-4998c40f4df3_600x.png?v=1625046144",
      ],
      color: ["Black", "Red", "Marron", "Orangered"],
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