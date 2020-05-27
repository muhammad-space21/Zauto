import styled from 'styled-components';


export const Container = styled.div`
  width: 65vw;
  height: 30vh;
  display: flex;
  flex-direction: row;
  box-shadow: 9px 9px 16px #06060616;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  margin-bottom: 50px;
  position: relative;
    @media screen and ( min-width: 1500px) {
      width: 90vw;
      height: 30vh; 
    }
    @media screen and ( max-width: 1500px) {
      width: 90vw;
      height: 35vh; 
    }
    @media screen and ( max-width: 769px ) {
      width: 90%;
      height: fit-content;
      display: flex;
      flex-wrap: wrap;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
    }
`;

export const Card = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #DADADA;
  background-color: white;
  text-align: center;
  @media screen and ( max-width: 769px ) {
    width: 50%;
    height: 30vh;
  }

    span {
      font-size: 16px;
      line-height: 20px;
      margin-left: 40px;
      margin-right: 40px;
      margin-bottom: 50px;
    }
    @media screen and (min-width: 1300px) {
      span {
        font-size: 18px;
        line-height: 25px;
        margin-left: 40px;
        margin-right: 40px;
      }
    }
    @media screen and (max-width: 991px) {
      span {
        margin-left: 30px;
        margin-right: 30px;
      }
    }
    @media screen and (max-width: 768px) {
      span {
        font-size: 20px;
        line-height: 22px;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    @media screen and (max-width: 550px) {
      span {
        font-size: 18px;
        line-height: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
    @media screen and (max-width: 460px) {
      span {
        font-size: 13px;
        line-height: 15px;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    &:hover {
      background-color: #00AF66;
      cursor: pointer;
      span {
        color: white;
      }
    }
`;

export const ImageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and ( min-width: 1500px) {
    width: 60px;
    height: 60px;
  }
  @media screen and ( max-width: 768px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
`;


