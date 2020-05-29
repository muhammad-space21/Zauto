import React from 'react';

import { Container } from './styles';

import NavbarMain from '../../containers/Navbar';
import SalesInfo from '../../containers/SalesInfo';

const CalculatorPage = () => (
  <Container>
    <NavbarMain />
    <SalesInfo />
  </Container>
);

export default CalculatorPage;