import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: white;
  /* border: 2px solid red; */
  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`;

export const Row = styled.div`
  width: 100vw;
  height: 100%;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 30px;
    @media screen and (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 0px;
    }
`;

export const Col1 = styled.div`
  width: 46%;
  height: 100%;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 1100px) {
    width: 95%;
    margin-bottom: 30px;
  }
`;

export const Col2 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

export const Type = styled.h1`
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  font-family: 'Roboto', sans-serif;
  color: black;
  text-transform: uppercase;
  text-align: center;
  @media screen and (min-width: 1500px) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Model = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: black;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export const ModelHide = styled.span`
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  color: black;
  display: none;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1100px) {
    display: block;
    font-size: 45px;
    line-height: 45px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 85px;
    line-height: 45px;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid yellow; */
  @media screen and (max-width: 1100px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -30px;
  @media screen and (max-width: 1100px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const IconsWrapper = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid red; */
  margin-top: 30px;
    img {
      width: 60px;
      height: 60px;
    }
    @media screen and (min-width: 1500px) {
      img {
        width:  80px;
        height: 80px;
      }
    }
    @media screen and (max-width: 550px) {
      img {
        width: 50px;
        height: 50px;
      }
    }
`;

export const Details = styled.div`
  font-size: 22px;
  line-height: 22px;
  font-weight: 600;
  color: black;
  margin-top: 40px;
    span {
      font-size: 19px;
      color: black;
      margin-left: 2px;
    }
    @media screen and (max-width: 550px) {
      font-size: 16px;
      line-height: 18px;
      font-weight: 500;
      span {
        font-size: 14px;
        color: black;
        margin-left: 2px;
      }
    }
`;