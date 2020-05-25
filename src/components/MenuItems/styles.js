import styled from 'styled-components';

export const Container = styled.div`
  width: 33%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    margin-top: -200px;
  }
  @media screen and (max-width: 460px) {
    margin-top: -200px;
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
  @media screen and (max-width: 768px) {
    width: 100%;
    height: fit-content;
  }
  
`;

export const Model = styled.span`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: #254971;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media screen and (max-width: 460px) {
    font-size: 15px;
  }
`;

export const Price = styled.span`
  font-size: 23px;
  line-height: 24px;
  font-weight: 700;
  color: black;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 460px) {
    font-size: 15px;
    line-height: 18px;
  }
`;