import styled from 'styled-components';
import Slider from "react-slick";

export const  Container = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 550px)  {
    margin-bottom: 30px;
  }

`;

export const Heading = styled.span`
  font-size: 48px;
  letter-spacing: 0px;
  color: #000000;
  font-weight: 500;
  @media screen and (mx-width: 768px) {
    font-size: 38px;
    line-height: 40px;
  }
  @media screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;
export const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
    &:focus {
      outline: none;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  &:hover {
    cursor: grab;
  }
`;

export const SliderStyled = styled(Slider)`
  width: 80vw;
  margin: auto;
  display: flex;
  margin-top: 50px;
`;