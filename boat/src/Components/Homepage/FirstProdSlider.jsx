import styled from "styled-components";
import { ProductCard } from "./../Products/ProductCard";

const Container = styled.div`
  height: 650px;
  padding-top: 40px;
  padding-bottom: 120px;

  .heading {
    color: white;
  }

  .data-grid {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    margin-top: 30px;
    row-gap: 70px;
  }
`;

export function FirstProdSlider() {
  const temp = [
    {
      id: 23,
      name: "boAt Airdopes 131 - Wireless Earbuds",
      category: "WIRELESS EARBUDS",
      rating: 4.8,
      reviews: 915,
      original_price: 2990,
      discount: 67,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1642405569",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_600x.png?v=1642405569",
      ],
      color: ["Lightpink", "Black", "CrimsonCream", "Steelblue", "Ivory White"],
    },
    {
      id: 24,
      name: "boAt Rockerz 330",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 258,
      original_price: 2990,
      discount: 50,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_600x.png?v=1641801688",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_12f5e240-7eec-4b32-8121-29594cae6e84_600x.png?v=1641801688",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main4_600x.png?v=1641801688",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_600x.png?v=1641801688",
      ],
      color: [
        "Active Black",
        "Raging Red",
        "Blazing Yellow",
        "Navy Blue",
        "Teal Green",
      ],
    },
    {
      id: 25,
      name: "boAt Rockerz 333",
      category: "BLUETOOTH EARPHONES",
      rating: 4.0,
      reviews: 90,
      original_price: 3990,
      discount: 70,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_600x.png?v=1641801662",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-2_600x.png?v=1626336060",
      ],
      color: ["Active Black", "Teal Green", "Cherry Black"],
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
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_600x.png?v=1650387008",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_600x.png?v=1650387008",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_600x.png?v=1650386995",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main6_2_600x.png?v=1640628318",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_600x.png?v=1640628318",
      ],
      color: [
        "Charcoal Black",
        "Pitch Black",
        "Olive Green",
        "Sandy Cream",
        "Deep Blue",
      ],
    },
  ];

  return (
    <Container>
      {/* <div className="category">
        <span>Best sellers</span>
        <span>Trending in Earbuds</span>
        <span>Top Smart Watches</span>
        <span>New Launches</span>
        <span>Top Wireless</span>
        <span>Top Wired</span>
      </div> */}
      <div className="heading">
        <h1>Best Sellers</h1>
      </div>
      <div className="data-grid">
        {temp.map((el) => (
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
