import styled from 'styled-components';

export const Container = styled.div`
  width: 22%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  &:hover {
    box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
`;

export const Model = styled.span`
  font-size: ${(props) => props.small ? '18px' : '20px'};
  line-height: ${(props) => props.small ? '18px' : '20px'};
  font-weight: ${(props) => props.small ? '500' : '700'};
  color: ${(props) => props.small ? 'black' : '#523FDC'};
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Price = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 30px;
`;