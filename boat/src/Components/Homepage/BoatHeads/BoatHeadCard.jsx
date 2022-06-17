import styled from "styled-components";

const BCardContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > img {
    max-width: 100%;
    height: auto;
  }

  & > .card-data > h3 {
    color: var(--red);
  }

  & > .card-data {
    width: 40%;
    height: 500px;
    text-align: left;
  }

  & > .card-data h1 {
    margin-bottom: 30px;
  }

  & > .card-data h3 {
    margin-bottom: 15px;
  }

  & > .card-data h2 {
    margin-bottom: 40px;
  }

  & > .card-data p {
    line-height: 25px;
  }
`;

const BoatHeadCard = ({ head, name, tagline, desc, imgurl }) => {
  return (
    <div>
      <BCardContainer>
        <div className="img-size">
          <img src={imgurl} alt={name} />
        </div>
        <div className="card-data">
          <h1>{head}</h1>
          <h3>{name}</h3>
          <h2>{tagline}</h2>
          <p>{desc}</p>
        </div>
      </BCardContainer>
    </div>
  );
};

export default BoatHeadCard;
