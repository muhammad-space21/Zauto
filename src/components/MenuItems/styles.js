import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 1100px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`;

export const ImageContainer = styled(Link)`
  width: 100%;
  height: 50%;
  &:hover {
    box-shadow: 
      0 7px 30px -10px rgba(150, 170, 180, 0.5);
      cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Model = styled(Link)`
  width: 100%;
  height: 43px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #254971;
  margin-top: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 20px;
  }
  @media screen and (max-width: 460px) {
    font-size: 15px;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const Price = styled(Link)`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 25px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 460px) {
    font-size: 13px;
    line-height: 18px;
  }
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;