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

export const Row = styled.div`
  width: 90vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`;

export const BtnWrapper = styled.div`
  display: ${(props) => props.catalog ? 'none' : 'block'};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: -50px;
  }
`;