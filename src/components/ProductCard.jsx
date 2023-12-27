import React from 'react'
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
const ProductCard = () => {
  return (
    <Container>
        <ProductImage>
            <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31VymZtY9pL._MCnd_AC_.jpg" alt="" />
        </ProductImage>
        <Details>
        <ProductName>
            <h3>Apple</h3></ProductName>
        <ProductDesc>
            <h5>Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Starlight (5th Generation)</h5></ProductDesc>
        <Rating name="read-only" value={2.5} readOnly />
        </Details>
    </Container>
  )
}

const Container=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: #fff;
border-radius: 10px;
/* background-color: rgb(236,300,234); */
`;

const ProductImage=styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 20px;
img{
    width: 180px;
    height: 200px;
}
flex:0.7
`;

const ProductName=styled.div`
h3{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
`;

const ProductDesc=styled.div`
width: 90%;
/* margin:auto; */
display: flex;
flex-direction: column;
justify-content: space-evenly;

h5{
    font-size: 16px;
    margin: 0;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
}
`;

const Details=styled.div`
background-color:white;
flex: 0.3;
`;
export default ProductCard