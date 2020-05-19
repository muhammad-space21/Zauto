import styled from 'styled-components';

import ImageBackground from '../../assets/images/malibu.3.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageBackground});
  background-size: cover;
    @media screen and (max-width: 800px) {
      object-fit: cover;
      background-position: center;
    }
    @media screen and (max-width: 768px) {
      background-image: 
        linear-gradient(to top, #523fdc, #3437a6, #222b71, #191d3d, #0b0b0c);
    }
`;