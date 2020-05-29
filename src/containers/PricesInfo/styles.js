import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: white;
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
  width: 30%;
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
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 1100px) {
    width: 95%;
  }
`;

export const Text = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #dfe6e9;
  `;

export const Option = styled.div`
  font-size: 20px;
  line-height: 25px; 
  font-weight: 500;
  font-family: 'Montserrat' sans-serif;
  color: ${(props) => props.active ? '#3FDD6F' : '#1a1a1a'};
  @media screen and (max-width: 460px) {
      font-size: 18px;
      line-height: 20px; 
    }
`;

export const Value = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${(props) => props.active ? '#3FDD6F' : '#8E8E8E'};
    @media screen and (max-width: 460px) {
      font-size: 15px;
      line-height: 20px; 
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
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 85px;
    line-height: 45px;
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
  margin-top: 50px;
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