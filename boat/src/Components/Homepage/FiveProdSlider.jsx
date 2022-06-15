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

export function FiveProdSlider() {
  const temp = [
    {
      id: 23,
      name: "boAt Rockerz 333 Pro",
      category: "BLUETOOTH EARPHONES",
      rating: 4.9,
      reviews: 78,
      original_price: 2990,
      discount: 43,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m1_dac5a6b1-7937-4cdf-be70-76bb5a1fcf49_600x.png?v=1639153081",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/GREEN_0bbd189a-8ab1-4806-80f2-95f679d0712d_600x.png?v=1652792832",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m3_08324ce2-cdd9-44d6-8f5b-849fda265ba8_600x.png?v=1639153082",
      ],
      color: ["Red", "Black", "TealGreen", "Blue"],
    },
    {
      id: 24,
      name: "boAt Rockerz 255 Pro",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 368,
      original_price: 3499,
      discount: 60,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_600x.png?v=1625045854",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/8654ab35-d654-4a82-a9ff-ddcbebbaf31d_600x.png?v=1625045107",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/30292182-5454-42b0-b742-6c0954331d85_600x.png?v=1625045494",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-255-pro-activeblack_600x.png?v=1632909759",
      ],
      color: ["Teal", "Red", "MidnightBlue", "Goldenred", "Black"],
    },
    {
      id: 25,
      name: "TRebel Rockerz 235 V2",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 14,
      original_price: 2990,
      discount: 60,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-blue_f69b43bd-1bf3-41f0-a199-837a1eebb711_600x.png?v=1614462143",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-red_de759211-e939-4ce9-9a77-c68705104ea7_600x.png?v=1614462161",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rockerz-235-v2-grey_594d10ee-9900-4da9-aa69-7b2d73c85970_600x.png?v=1622525841",
      ],
      color: ["Royal Blue", "IndianRed", "Grey"],
    },
    {
      id: 26,
      name: "boAt Storm",
      category: "BLUETOOTH EARPHONES",
      rating: 4.8,
      reviews: 912,
      original_price: 5990,
      discount: 58,
      isAvailable: true,
      image: [
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333_600x.png?v=1641801662",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-2_600x.png?v=1626336060",
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-3_600x.png?v=1641801638",
      ],
      color: [
        "Active Black",
        "Teal Green",
        "CherryBlack",
        "MidnightBlue",
        "Navy Blue",
      ],
    },
  ];

  return (
    <Container>
      <div className="heading">
        <h1>Trending Headphones</h1>
      </div>
      <div className="data-grid">
        {temp.map((el) => (
          <ProductCard key={el._id} el={el}></ProductCard>
        ))}
      </div>
    </Container>
  );
}
