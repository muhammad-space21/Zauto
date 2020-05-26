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

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #4D4D4D;
  margin-top: 100px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 600px) {
    font-size: 28px;
    line-height: 35px;
    margin-right: 20px;
    margin-left: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const Row = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
  margin-top: 50px;
`;