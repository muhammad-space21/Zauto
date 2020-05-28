import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 98vh;
  background-color: white;
  position: relative;
  margin-top: ${(props) => props.descriptionPage ? '100px' : '0'};
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
  color: black;
  text-transform: uppercase;
  align-self: flex-start;
  margin-left: 70px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    font-size: 20px;
    font-weight: 400;
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
  margin-top: 20px;
  @media screen and (min-width: 1500px) {
    font-size: 20px;
    font-weight: 400;
  }
`;

export const Model = styled.span`
  font-size: 65px;
  font-weight: 700;
  line-height: 65px;
  color: black;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1100px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    font-size: 85px;
    line-height: 45px;
  }
`;

export const ModelHide = styled.span`
  font-size: 65px;
  font-weight: 700;
  line-height: 65px;
  color: black;
  display: none;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1100px) {
    display: block;
    font-size: 45px;
    line-height: 45px;
    margin-bottom: 30px;
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
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1100px) {
    width: 100%;
    justify-content: space-evenly;
    margin-top: 50px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  height: 200px;
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
    height: 130px;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const IconsWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const IconsWrapperCustom = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 35px;
  margin-right: ${(props) => props.marginRight35 ? '-20px' : '0'};
    img {
      width: 60px;
      height: 60px;
    }
    @media screen and (min-width: 1500px) {
      img {
        width:  80px;
        height: 80px;
      }
      @media screen and (max-width: 550px) {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
`;

export const Details = styled.div`
  font-size: 25px;
  line-height: 22px;
  font-weight: 600;
  color: black;
  margin-top: 40px;
    span {
      font-size: 19px;
      color: black;
      margin-left: 3px;
    }
    @media screen and (max-width: 550px) {
      font-size: 20px;
      line-height: 20px;
      font-weight: 500;
      span {
        font-size: 16px;
        margin-left: 3px;
      }
    }
`;