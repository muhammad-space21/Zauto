import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Col1 = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-position: center; */
  /* background-size: cover; */
  overflow: hidden;
    @media screen and (max-width: 800px) {
      display: none;
    }
`;

export const Col2 = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FEFEFE;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 60%;
  }
`;