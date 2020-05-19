import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 110vh;
  background-color: black;
  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`;

export const Row = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-bottom: 50px; 
    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
`;

export const Col1 = styled.div`
  width: 46%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1100px) {
    width: 90%;
    margin-bottom: 30px;
  }
`;

export const Col2 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`;

export const Title = styled.h1`
  font-size: 13px;
  font-weight: 300;
  line-height: 15px;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-transform: uppercase;
  align-self: flex-start;
  margin-left: 50px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Type = styled.h1`
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;

export const Model = styled.span`
  font-size: 65px;
  font-weight: 700;
  line-height: 65px;
  color: white;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1100px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const ModelHide = styled.span`
  font-size: 65px;
  font-weight: 700;
  line-height: 65px;
  color: white;
  display: none;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1100px) {
    display: block;
    font-size: 45px;
    line-height: 45px;
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    width: 100%;
    justify-content: space-evenly;
    margin-top: 50px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 1100px) {
    width: 60%;
    margin-top: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    height: 120px;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

export const IconsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
    img {
      width: 80px;
      height: 80px;
    }
`;

export const Details = styled.div`
  font-size: 22px;
  line-height: 22px;
  font-weight: 500;
  color: #523FDC;
  margin-top: 40px;
    span {
      font-size: 19px;
      color: #523FDC;
      margin-left: 3px;
    }
`;