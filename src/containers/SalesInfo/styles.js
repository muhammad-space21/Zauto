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
      padding-bottom: 20px;
      padding-top: 20px;
    }
`;

export const Col1 = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 1100px) {
    width: 90%;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1500px) {
    width: 45%;
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
    width: 90%;
    height: 80%;
  }
  @media screen and (min-width: 1500px) {
    width: 45%;
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
  @media screen and (max-width: 1100px) {
    height: 50px;
  }
`;

export const Option = styled.div`
  font-size: 20px;
  line-height: 25px; 
  font-weight: 500;
  font-family: 'Montserrat' sans-serif;
  color: ${(props) => props.active ? '#3FDD6F' : '#1a1a1a'};
  @media screen and (max-width: 550px) {
    font-size: 17px;
    line-height: 17px;
  }

  @media screen and (max-width: 400px) {
    font-size: 15px;
    line-height: 17px; 
  }
`;

export const Value = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${(props) => props.active ? '#3FDD6F' : '#8E8E8E'};
    @media screen and (max-width: 550px) {
      font-size: 15px;
      line-height: 18px; 
    }

    @media screen and (max-width: 400px) {
      font-size: 13px;
      line-height: 15px; 
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
  margin-top: 40px;
  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-top: 30px;
    height: 150px;
  }
`;