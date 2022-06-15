import styled from "styled-components";
import { ProductCard } from "./../Products/ProductCard";

const Container = styled.div`
  width: 100%;
  height: 540px;

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

export function FourProdSlider() {
  const temp = [
    {
      id: 23,
      name: "boAt BassHeads 100",
      category: "WIRED EARPHONES",
      rating: 4.8,
      reviews: 386,
      original_price: 999,
      discount: 60,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_600x.png?v=1625046259",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/553af994-244a-4b81-9d9e-9967a1b966b3_600x.png?v=1625046259",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/48f99cab-b0ac-4e12-a5b4-fca6af5adf47_600x.png?v=1625046259",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04981d98-f010-4553-9ba2-97c9a36fef4e_600x.png?v=1625046259",
      ],
      color: ["Black", "White", "Pink", "Red"],
    },
    {
      id: 24,
      name: "boAt BassHeads 103",
      category: "WIRED EARPHONES",
      rating: 4.8,
      reviews: 470,
      original_price: 1290,
      discount: 71,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_600x.png?v=1574927262",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103b_600x.png?v=1574927262",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintorange_600x.png?v=1632906888",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103_mintgreen_600x.png?v=1632906887",
      ],
      color: ["Black", "Red", "Blue", "Orange", "Green"],
    },
    {
      id: 25,
      name: "boAt BassHeads 102",
      category: "WIRED EARPHONES",
      rating: 4.8,
      reviews: 150,
      original_price: 1290,
      discount: 65,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_600x.png?v=1633152280",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-red_600x.png?v=1633152280",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-bassheads-102-black_600x.png?v=1633152280",
      ],
      color: ["Cornflowerblue", "Indianred", "Black"],
    },
    {
      id: 26,
      name: "boAt BassHeads 242",
      category: "WIRED EARPHONES",
      rating: 4.8,
      reviews: 330,
      original_price: 1490,
      discount: 70,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a34a991b-8410-47b7-8bee-b10a6118b23b_600x.png?v=1625046386",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/eab9128d-65cf-42ce-83a1-03492ec6157d_600x.png?v=1625046386",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4d45fa60-7d5b-4dfe-b6ef-65df28058130_600x.png?v=1625046386",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/51a9e051-8c98-4dcd-9d03-9cae0b35bb0f_600x.png?v=1625046386",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4eed59f3-6f28-4511-9240-c043e2523482_600x.png?v=1625046386",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c1cb9fb6-b924-4474-a8f6-dc06ebc6c610_600x.png?v=1625046386",
      ],
      color: ["Orange", "Black", "Yellowgreen", "Red", "Blue", "Lime"],
    },
  ];

  return (
    <Container>
      <div className="heading">
        <h1>Trending Wired</h1>
      </div>
      <div className="data-grid">
        {temp.map((el) => (
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
