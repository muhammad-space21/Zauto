import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  background-color: #D8D8D85C;
  position: relative;
`;

export const Row = styled.div`
  width: 90vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

export const BtnWrapper = styled.div`
  display: ${(props) => props.catalog ? 'none' : 'block'};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: -50px;
  }
`;

export const ContainerBrandIcons = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
  text-align: center;
  background-color: #F1F1F1;
`;

export const RowBrandIcons = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-left: -30px;
  @media screen and (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 0;
  } 
`;

export const ImgChevrolet = styled.div`
  width: 20%;
  height: 20%;
  margin-left: -30px;
  img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 550px) {
    width: 23%;
    height: 23%;
    margin-left: 0px;
  }
`;

export const ImgHyundai = styled.div`
  width: 20%;
  height: 15%;
  img {
      width: 100%;
      height: 100%;
    }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    width: 23%;
    height: 18%;
  }
`;

export const ImgLada = styled.div`
  width: 12%;
  height: 12%;
  img {
      width: 100%;
      height: 100%;
    }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    width: 15%;
    height: 15%;
  }
`;


export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #4D4D4D;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 25px;
    line-height: 35px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 30px;
  }
  `;
