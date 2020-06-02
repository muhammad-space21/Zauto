import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background-color: white;
  margin-top: 100px;
  @media screen and (max-width: 1200px) {
    height: fit-content;
  }
`;

export const Row = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 30px;
  padding-bottom: 30px;
    @media screen and (max-width: 1200px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding-top: 0px;
    }
`;

export const Col1 = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    width: 95%;
    margin-bottom: 30px;
  }
`;

export const Col2 = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 2px solid black; */
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HR = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #eeeeee;
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

export const ModelHide = styled.div`
  font-size: 30px;
  font-weight: 700;
  line-height: 35px;
  color: black;
  display: none;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1200px) {
    display: block;
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 40px;
    line-height: 45px;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  /* border: 2px solid red; */
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0;
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* border: 2px solid blue; */
  margin-top: 30px;
    img {
      width: 50px;
      height: 50px;
    }
    @media screen and (min-width: 1500px) {
      img {
        width:  60px;
        height: 60px;
      }
    }
    @media screen and (max-width: 768px) {
      width: 45%;
    }
    @media screen and (max-width: 550px) {
      width: 50%;
    }
    @media screen and (max-width: 550px) {
      img {
        width: 30px;
        height: 30px;
      }
    }
`;

export const Details = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: black;
  margin-top: 5px;
    span {
      font-size: 20px;
      color: black;
      margin-left: 1px;
    }
    @media screen and (max-width: 550px) {
      font-size: 16px;
      line-height: 16px;
      font-weight: 500;
      span {
        font-size: 14px;
        color: black;
        margin-left: 1px;
      }
    }
`;

export const Title = styled.div`
  font-size: 18px;
  line-height: 17px;
  font-weight: 600;
  color: grey;
  margin-right: 10px;
  @media screen and (max-width: 550px) {
      font-size: 13px;
      line-height: 14px;
      font-weight: 500;
  }
`;

export const TextWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  @media screen and (max-width: 550px) {
    margin-left: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  @media screen and (max-width: 1200px) {
    margin-top: 35px;
  }
`;