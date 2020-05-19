import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  @media screen and (max-width: 991px) {
    padding: 20px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Col1 = styled.div`
  width: 48%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
    img {
      width: 90%;
      height: 400px;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
`;

export const Col2 = styled.div`
  width: 48%;
  height: 400px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: 30px;
`;

export const Text = styled.div`
  width: 100%;
  height: 50px;
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