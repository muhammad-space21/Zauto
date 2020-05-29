import styled from 'styled-components';

import { Carousel } from 'react-bootstrap';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  height: fit-content;
`;


export const CarouselItem = styled(Carousel.Item)`
  width: 100vw;
  height: 100vh;
  img {
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }
`;