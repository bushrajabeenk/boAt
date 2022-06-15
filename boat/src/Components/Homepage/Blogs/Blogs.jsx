import { BlogsCard } from "./BlogsCard";
import styled from "styled-components";

const blogs = [
  {
    bThumb:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291",
    bTitle: "Earphones Buying Guide - Everything You Need To Know",
  },
  {
    bThumb:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307",
    bTitle: "The Ultimate Smartwatch Guide - Get The World On Your Wrist",
  },
  {
    bThumb:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog_600x.jpg?v=1654260672",
    bTitle: "It Is Time To Rock The Streets With boAt Headphones",
  },
];

const BlogContainer = styled.section`
  width: 100%;
  height: 550px;
  margin: auto;
  color: var(--black);
  text-align: center;
  background-color: var(--grey2);

  .heading {
    color: black;
    margin-top: 50px;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 61px;
    letter-spacing: 0em;
    padding-top: 30px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BCardBtn = styled.button`
  background: red;
  color: #fff;
  border-radius: 5px;
  margin: auto;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.1em;
  border: 1px solid var(--red);
  line-height: 1em;
  height: auto;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-self: flex-start;
`;

export const Blogs = () => {
  return (
    <BlogContainer>
      <div className="heading">
        <h2>boAt Blogs</h2>
      </div>
      <div>
        {blogs.map(({ bThumb, bTitle }) => (
          <BlogsCard key={bTitle} bThumb={bThumb} bTitle={bTitle} />
        ))}
      </div>
      <BCardBtn>EXPLORE BLOGS</BCardBtn>
    </BlogContainer>
  );
};
