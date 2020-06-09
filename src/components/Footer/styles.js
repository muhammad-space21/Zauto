import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const LogoWrapper = styled(Link)`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: -20px;
  img {
    width: 90%;
    height: auto;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const Row2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Col = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const Col2 = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 30%;
  }
`;

export const Title = styled(Link)`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  color: white;
  margin-right: 10px;
  margin-bottom: -45px;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: #00AF66;
  }
  @media screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const TitleHide = styled.span`
  display: none;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  color: white;
  margin-right: 10px;
  margin-bottom: -30px;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Title1 = styled.span`
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const Number = styled.a`
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: #00AF66;
  }
  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 18px;
  }
`;

export const Wrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const H6 = styled.span`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: white;
`;

export const Reserved = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: white;
  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;

export const Address = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 20px;
  color: white;
  text-align: center;
`;

export const HrDotted = styled.div`
  width: 100vw;
  border-bottom: 2px dotted white;
  margin-bottom: 20px;
`;

export const Hr = styled.div`
  width: 100vw;
  border-bottom: 2px solid grey;
`;

export const SocialFollow = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  float: right;
  margin-right: 50px;
  @media screen and (max-width: 900px) {
  margin-right: 20px;
  }
`;

export const Icons = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  margin-right: 20px;
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