import styled from 'styled-components';
import { Table, Thead, Th, Td } from 'react-super-responsive-table';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  padding-top: 20px;
  @media screen and (max-width: 991px) {
    padding: 20px;
    padding-top: 0;
  }
`;

export const TableStyled = styled(Table)`
  width: 100vw;
  height: fit-content;
  border: 0;
  box-shadow: 0, 4px, 6px, 0 
    hsla(0, 0%, 0%, 0,2);
`;

export const TheadStyled = styled(Thead)`
  background-color: hsla(220, 12%, 95%);
`;

export const ThStyled = styled(Th)`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  height: 40px;
  text-align: center;
  border: 2.5px solid #FBFBFB;
    @media screen and (max-width: 460px) {
      font-size: 16px;
      line-height: 16px;
    }
`;

export const TdStyled = styled(Td)`
  font-size: 18px;
  line-height: 18px;
  height: 40px;
  text-align: center;
  border: 2.5px solid #FBFBFB;
  @media screen and (max-width: 460px) {
    font-size: 16px;
    line-height: 16px;
  }
`;


