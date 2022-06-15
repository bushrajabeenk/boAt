import React from "react";
import styled from "styled-components";
import BoatHeadCard from "./BoatHeadCard";

const Container = styled.div`
  width: 100%;
  height: 650px;
  margin: auto;
  color: var(--white);
`;

const bHeads = [
  {
    head: "Meet the boAtheads",
    name: "KL RAHUL",
    tagline: "Fierce. Flamboyant. Fearless.",
    desc: "When you hear the crowd roar, be assured that it’s KL Rahul making his way to the field. Our hardcore boAthead, KL Rahul, hits it with his performance as well as his fashion statement. On or off field, Rahul always makes #MoveOfTheChampions.",
    imgurl: [
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fierce_-Flamboyant_-Fearless_jpg_563x.jpg?v=1651227694",
    ],
  },
//   {
//     head: "Meet the boAtheads",
//     name: "RASHMIKA MANDANNA",
//     tagline: "Radiant. Rebel. Trailblazer.",
//     desc: "The Queen of sass &amp; hearts, Rashmika Mandanna is the newly on-board boAthead. Do you know what our boAthead Rashmika &amp; boAt have in common? They both leave you speechless with their mind-boggling performance.",
//     imgurl: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Radiant_-Rebel_-Trailblazer_jpg_563x.jpg?v=1651227770",
//     ],
//   },
//   {
//     head: "Meet the boAtheads",
//     name: "KIARA ADVANI",
//     tagline: "Bold. Fashionista. Hustler.",
//     desc: "A powerhouse who doesn’t believe in backing down - Kiara is a fierce hustler. No wonder why Kiara is our passionate boAthead. The hustler in her has gotten the whole film industry on its toes. So rock your style as you hustle to the top just like the boAt &amp; Kiara way!",
//     imgurl: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bold_-Fashionista_-Hustler_jpg_563x.jpg?v=1651227807",
//     ],
//   },
//   {
//     head: "Meet the boAtheads",
//     name: "KARTIK AARYAN",
//     tagline: "Energetic. Charming. Free Spirit.",
//     desc: "",
//     imgurl: [
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Energetic_-Charming_-Free-Spirit_jpg_563x.jpg?v=1651227851",
//     ],
//   },
];

const BoatHeads = () => {
  return (
    <Container>
      <div>
        {bHeads.map(({ head, name, tagline, desc, imgurl }) => (
          <BoatHeadCard
            key={name}
            head={head}
            name={name}
            tagline={tagline}
            desc={desc}
            imgurl={imgurl}
          />
        ))}
      </div>
    </Container>
  );
};

export default BoatHeads;
