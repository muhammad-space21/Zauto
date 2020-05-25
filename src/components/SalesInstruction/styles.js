import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  position: relative;
  background-color: white;
`;

export const Heading = styled.h1`
  font-size: 38px;
  font-weight: 700;
  line-height: 55px;
  color: #000000;
  margin-top: 100px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 45px;
  }
  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 35px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 460px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const Row = styled.div`
  width: 85vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  position: relative;
  @media screen and (max-width: 900px) {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
  }
`;

export const Card = styled.div`
  width: 48%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 1.5px solid #E5E5E5;
  background-color: #FCFCFC;
    @media screen and (max-width: 768px) {
      height: fit-content;
    }

    &:hover {
      border-color: #00CE1B;
    }
  img {
    width: 70px;
    height: 70px;
    margin-top: 30px;
    margin-bottom: 50px;
    @media screen and (max-width: 550px) {
      margin-top: 50px;
      margin-bottom: 0px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 80vw;
    margin-bottom: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 33px;
  color: black;
  margin-bottom: 30px;
  margin-top: 20px;
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 27px;
  font-weight: 700;
  color: #bfbfbf;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

export const BtnWrapper = styled.div`
  width: fit-content;
  height: fit-content;
    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
    }

`;