import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ImageBackgrround from '../../assets/images/malibu.3.png';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${ImageBackgrround});
  background-position: center; 
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-image:
      linear-gradient(to bottom, #254971, #00648d, #008096, #009987, #00af66);
  }
`;

export const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: auto;
  img {
    width: 60%;
    height: 25px;
    margin-left: 50px;
  }
  @media screen and (max-width: 991px) {
    margin-left: -20px;
  }
`;

export const Row = styled.div`
  width: 80vw;
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 150px;
  @media screen and (max-width: 800px) {
    display: flex;
    padding-top: 50px;
  }
`;

export const Title = styled.span`
  font-size: 23px;
  line-height: 20px;
  font-weight: 500;
  color: white;
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const LinkStyle = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  line-height: 37px;
  color: white;
    &:hover {
      color: #00AF66;
      text-decoration: none;
    }
  @media screen and (max-width: 600px) {
    font-size: 17px;
    line-height: 30px;
  }
`;

export const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const H6 = styled.span`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: #9096A0;
  margin-right: auto;
  margin-left: 80px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    color: white;
    margin-left: 50px;

  }
`;

export const HrDotted = styled.div`
  width: 90vw;
  border-bottom: 2px dotted white;
`;

export const SocialFollow = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

export const Icons = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-right: 10px;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
    img {
      width: 17px;
      height: 15px;
    }
`;