    import React from "react";
    import styled from "styled-components";
    import {  useNavigate, useParams } from "react-router-dom";
import ProductDetails from "./ProductsDetails";
import { useEffect } from "react";
import { setSelectedPage } from "../../redux/pageSlice";
import { useDispatch } from "react-redux";
    const CardContainer = styled.div`
      width: 100%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;
      cursor: pointer;
      background-color: #f0f0f0;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &:hover {
        transform: scale(1.05);
      }
    `;

    const CardImage = styled.img`
      width: 100%;
      height: 90%;
      border-radius: 10px 10px 0 0;
    `;

    const Title = styled.h3`
      margin: 12px 0;
      font-size: 1.5rem;
      text-align: center;
      color: #0a70b9; /* Blue title color */
    `;

    const Description = styled.p`
      margin: 12px 0;
      text-align: center;
      height: 120px;
      color: #666;
    `;

    const Button = styled.button`
      display: block;
      margin: 8px; /* Add margins to all sides with 8 pixels */
      margin-bottom:0px;
      transition: background-color 0.8s, transform 0.5s, color 0.5s;
      background-color: inherit; /* Inherit the background color from the parent */
      color: #000; /* Text color */
      padding: 8px 0; /* Adjust    to fill available space */
      // border: 2px solid #ccc; /* Add a thin border of light grey color */
      border-radius: 7px;
      width: 100%; /* Make the button almost fill the available space */
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        background-color: #045F5F; /* Lighter blue on hover */
        color: #fff;
      }
    `



    const ProductCard = ({ product,setSelectedPage }) => {
      const params = useParams()
      const { id } = params;

      const navigate = useNavigate();

      const handleShowDetails = () => {
        navigate(`${product.name}`);
      };

      useEffect(() => {
        if (id != null) {
          setSelectedPage(<ProductDetails product={product}/>);
        }
      }, [id, product, setSelectedPage]);


      return (
        <CardContainer>
          <CardImage src={product.image} alt={product.name} />
          <Title>{product.name}</Title>
          <Description>{product.description}</Description>
          <Button onClick={handleShowDetails  }>Show Details</Button>

        </CardContainer>
      );
    };

    export default ProductCard;
