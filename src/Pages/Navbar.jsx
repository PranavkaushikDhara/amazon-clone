import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import searchlogo from '../assets/search.png'
import basket from '../assets/amazoncart.png'
const Navbar = () => {
    return (
        <Container>
            <Inner>
                <Logo>
                    <img src={logo} alt="" />
                </Logo>
                <Searchbar>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon>
                        <img src={searchlogo} alt="" />
                    </SearchIcon>
                </Searchbar>
                <RightContainer>
                    <NavButton>
                        <p>Hello,</p>
                        <p>Guest</p>
                    </NavButton>
                    <NavButton>
                        <p>Return</p>
                        <p>&Orders</p>
                    </NavButton>
                    <BasketButton>
                        <img src={basket}></img>
                    </BasketButton>

                </RightContainer>
            </Inner>
            <Outer>
            <NewSearchbar>
                    <input type="text" placeholder='Search...' />
                    <SearchIcon>
                        <img src={searchlogo} alt="" />
                    </SearchIcon>
            </NewSearchbar>
            </Outer>
        </Container>
    )
}
const Container = styled.div`
width:100%;
height:60px;
background-color:#131921 ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;

@media only screen and (max-width:767px){
height: 100px;
}
`;


const Inner = styled.div`
display:flex;
width: 100%;
align-items: center;
@media only screen and (max-width:767px){
justify-content: space-between;
}

`;
const Logo = styled.div`
margin-left: 0.5rem;
img{
    height: 30px;
    margin-top:10px
}
`;
const Searchbar = styled.div`
height: 35px;
flex: 1;
margin: 0px 15px;
display: flex;
align-items: center;
@media only screen and (max-width:767px){
        display: none;
} 

input{
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    padding: 0px;
    &::placeholder{
        padding-left: 0.2rem;
    }
}
`;

const NewSearchbar=styled.div`
height: 35px;
width: 90%;
flex: 1;
margin: 0px 15px;
display: flex;
align-items: center;

@media only screen and (min-width:768px){
        display: none;
} 
input{
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    padding: 0px;
    &::placeholder{
        padding-left: 0.2rem;
    }
}
`;
const SearchIcon = styled.div`
background-color: #febd69;
display: flex;
align-items:center;
height: 100%;
width: 40px; 
 justify-content: center;
border-radius: 0px 5px 5px 0px;
img{
    width: 22px;
}
`;
const RightContainer = styled.div`
display: flex;
width: fit-content;
justify-content: space-around;
height: 100%;
`;

const NavButton = styled.div`
color: white;
padding: 5px;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;
margin-right: 15px;

p{
    &:nth-child(1){
        font-size: 12px;
        margin: 0;
    }
    &:nth-child(2){
        font-size: 14px;
        font-weight: bold;
        margin: 0;
    }
}
`;

const BasketButton = styled.div`
margin-right: 15px;
align-items: center;
img{
    width: 40px;
    color: white;
}
`;

const Outer=styled.div`
display: flex;
width: 100%;
margin-top: 0.5rem;
`;
export default Navbar