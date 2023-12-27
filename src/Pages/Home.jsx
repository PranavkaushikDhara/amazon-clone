import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import banner from '../assets/bannerimg.jpeg'
import ProductCard from '../components/ProductCard';
const Home = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Banner>
          <img src={banner}></img>
        </Banner>
        <Main>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Main>
    </Container>
  )
}
const Container=styled.div`
width:100%;
background-color: rgb(234,237,237);
`;

const Banner=styled.div`
width: 100%;
img{
  width: 100%;
  -webkit-mask-image: linear-gradient(to bottom,
    rgba(0,0,0,2),rgba(0,0,0,0.95),rgba(0,0,0,0.85),rgba(0,0,0,0.75),rgba(0,0,0,0.55),rgba(0,0,0,0));
  mask-image: linear-gradient(to bottom,
    rgba(0,0,0,2),rgba(0,0,0,0.95),rgba(0,0,0,0.85),rgba(0,0,0,0.75),rgba(0,0,0,0.55),rgba(0,0,0,0));
}
`;

const Main=styled.div`
width: 100%;
display: grid;
grid-auto-rows: 420px;

grid-gap: 20px;
justify-content: center;

@media only screen and (min-width:992px){
  grid-template-columns: repeat(4,280px);
}
@media only screen and (min-width:768px) and (max-width:991px){
  grid-template-columns: repeat(3,30%);
  /* grid-gap: 0; */
}

@media only screen and (min-width:576px) and (max-width:767px){
  grid-template-columns: repeat(2,50%);
  /* grid-gap: 0; */
}
`;
export default Home