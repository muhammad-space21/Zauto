import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';

export const NavbarStyled = styled(Navbar)`
  width: 100vw;
  height: 100px;
  background-color: #000000;
  font-family: 'Varela Round', sans-serif;
  position: relative;
  @media screen and (max-width: 550px) {
    height: 80px;
  }
`;

export const NavStyled = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: white;
      height: 400px;
      width: 98%;
      margin-left: 0;
      margin-right: 20px;
      padding-left: 0;
      z-index: 100px;
    }
`;

export const NavLinkStyledBlack = styled(Nav.Link)`
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
  color: black;
  margin-right: 30px;
    &:hover {
      curosr: pointer;
      color: #00AF66; 
    }
  @media screen and (max-width: 1100px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 991px) {
    color: #00AF66;
    margin-right: 0px;
  }
`;

export const NavLinkStyled = styled(Nav.Link)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: white;
  margin-right: 30px;
  &:hover {
    color: white;
    cursor: pointer;
    &::before {
      width: 70px;
    }
  }
  &::before {
    position: absolute;
    content: "";
    bottom: 20px;
    background-color: #00AF66;
    height: 5px;
    width: 0;
    transition: .3s;
    border-radius: 5px;
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
      color: black;
      &:hover {
        color: #00AF66;
        curosr: pointer;
      }
  }
  
`;

export const NavItemStyled = styled(Nav.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 15px;
    font-family: 'Montserrat', sans-serif;
      @media screen and (max-width: 991px) {
        margin-left: 0px;
        color: black;
        &:hover {
          color: #00AF66;
        }
      }
  }
`;

export const HR = styled.div`
  height: 50px;
  border-left: 1px solid white;
  margin-right: 10px;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
  img {
    width: 80%;
    height: 25px;
    @media screen and (max-width: 550px) {
      width: 70%;
      height: 20px;
    }
  }
  @media screen and (max-width: 991px) {
    margin-left: -20px;
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  &:focus {
    outline: none;
  }
  img {
    width: 35px;
    height: 20px;
    @media screen and (max-width: 550px) {
      width: 30px;
      height: 15px;
    }
  }
`;