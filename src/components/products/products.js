import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductsCard";

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCardWrapper = styled.div`
  width: 25%; /* Set each card to be 25% of the container width for larger screens */
  box-sizing: border-box; /* Include padding and border in the width calculation */
  padding: 10px; /* Add some spacing around the cards */

  @media (max-width: 1200px) {
    width: 33.33%; /* On screens with a width of 1200px or smaller, set each card to 33.33% width for medium-sized screens */
  }

  @media (max-width: 768px) {
    width: 50%; /* On screens with a width of 768px or smaller, set each card to 50% width for smaller screens */
  }
`;

const generateRandomProducts = () => {
  const products = [];
  for (let i = 1; i <= 25; i++) {

    const imageUrl = `https://source.unsplash.com/random/800x800/?img=${i}`;
    products.push({
      name: `Product ${i}`,
      description: `Description of Product  kfhwi fhwi fhwi fhwiu fhwi fhqwifhqwi qwi fhqwpiofqw fhqwpi fhqwpu fhpqwei fqwpi fhqwpui fhqep fhep8 fepi fhqepi fqpi ${i}`,
      image: imageUrl,
    });
  }
  return products;
};

const products = generateRandomProducts();

const Products = ({setSelectedPage}) => {
  return (
    <div className="bg-slate-200">
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCardWrapper key={index}>
            <ProductCard product={product} setSelectedPage={setSelectedPage} />
          </ProductCardWrapper>
        ))}
      </ProductGrid>
    </div>
  );
};

export default Products;
