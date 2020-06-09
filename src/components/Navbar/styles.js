import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


export const NavbarStyled = styled(Navbar)`
  width: 100vw;
  height: 100px;
  background-color: #000000;
  position: fixed;
  z-index: 100;
  font-family: 'Varela Round', sans-serif;
  @media screen and (max-width: 550px) {
    height: 80px;
  }
`;

export const NavStyled = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 888;
    @media screen and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      background-color: black;
      height: 75vh;
      margin: 0;
      padding: 0;
    }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  z-index: 888;
  @media screen and (max-width: 991px) {
    margin-left: -50px;
    margin-right: -50px;
  }
`;

export const NavLinkHide = styled(HashLink)`
  display: none;
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: white;
  text-decoration: none;
  &:hover {
    color: #00AF66;
    cursor: pointer; 
    text-decoration: none;
  }
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const NavLinkCustom = styled(HashLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: white;
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    color: white;
    cursor: pointer;
    text-decoration: none;
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
    margin-right: 0;
    margin-bottom: -32px;
    &:hover {
      color: #00AF66;
      cursor: pointer;
    }
  }
`;

export const NavLinkStyledDropdown = styled(HashLink)`
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
  color: white;
  /* margin-right: 20px; */
  text-decoration: none;
  margin-left: 5px;
    &:hover {
      cursor: pointer;
      color: #00AF66; 
      text-decoration: none;
    }
  @media screen and (max-width: 1100px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 991px) {
    margin-right: 0;
    display: none;
  }
`;

export const NavLinkStyled = styled(HashLink)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: white;
  margin-right: 30px;
  text-decoration: none;
  &:hover {
    color: white;
    cursor: pointer;
    text-decoration: none;
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
    margin-right: 0;
    &:hover {
      color: #00AF66;
      cursor: pointer;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
`;

export const NavLinkStyledLogin = styled(Nav.Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #00AF66;
    text-decoration: none;
  }
  span {
    display: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300;
    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 991px) {
    span {
      display: block;
    }
    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
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
      margin-left: 10px;
      &:hover {
        color: #00AF66;
      }
        img {
          width: 30px;
          height: 30px;
        }
      }
  }
`;

export const HR = styled.div`
  height: 50px;
  border-left: 1px solid white;
  margin-right: 10px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  img {
    width: auto;
    height: 25px;
    @media screen and (max-width: 550px) {
      width: auto;
      height: 20px;
    }
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  margin-left: auto;
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
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