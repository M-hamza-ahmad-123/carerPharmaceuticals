import React from "react";
import styled from "styled-components";

// Define a color scheme for the cards
const cardColors = {
  background: "#f0f0f0",
  title: "#333",
  description: "#666",
  //   hoverBackground: "#0078d4",
  //   hoverTitle: "#fff",
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  cursor: pointer;
  background-color: ${cardColors.background};

  &:hover {
    transform: scale(1.05);
    background-color: ${cardColors.hoverBackground};
    h3 {
      color: ${cardColors.hoverTitle};
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  margin: 12px 0;
  font-size: 1.5rem;
  text-align: center;
  color: ${cardColors.title};
`;

const Description = styled.p`
  margin: 12px 0;
  text-align: center;
  height: 150px;
  color: ${cardColors.description};
`;
const ProductCard = ({ product }) => {
  return (
    <Card>
      <div>
        <Image src={product.image} alt={product.name} />
      </div>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
    </Card>
  );
};

export default ProductCard;
