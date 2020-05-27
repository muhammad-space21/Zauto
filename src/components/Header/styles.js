import styled from 'styled-components';

import { Carousel } from 'react-bootstrap';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: fit-content;
  border: 4px solid red;
`;


export const CarouselItem = styled(Carousel.Item)`
  width: 100vw;
  height: 90vh;
  border: 2px solid yellow;
  img {
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    position: static;
  }
`;

export const CarouselCaption = styled(Carousel.Caption)`
  height: 100vh;    
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid blue;
  position: absolute;


`;
export const Heading = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 50px;
  line-height: 60px;
  font-weight: 600;
  font-style: italic;
  color: white;
  font-family: 'Roboto' sans-serif;
    @media screen and (max-width: 1100px) {
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40px;
      line-height: 50px;
      text-align: center;
    }
    @media screen and (max-width: 550px) {
      font-size: 30px;
      line-height: 33px;
      text-align: center;
    }
`;

export  const ButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;