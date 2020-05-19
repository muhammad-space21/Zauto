import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dfe6e9;
  position: relative;
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ImgGm = styled.div`
  width: 30%;
  height: 400px;
  img {
      width: 100%;
      height: 100%;
    }
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 250px;
  }
`;

export const ImgHyundai = styled.div`
  width: 30%;
  height: 60px;
  img {
      width: 100%;
      height: 100%;
    }
  @media screen and (max-width: 768px) {
    width: 40%;
    height: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 700;
  line-height: 55px;
  color: #000000;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 45px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
