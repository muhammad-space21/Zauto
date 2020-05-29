import React from 'react';

import { Container } from './styles';

import NavbarMain from '../../containers/Navbar';
import PricesInfo from '../../containers/PricesInfo';
import SalesTable from '../../containers/PricesTable';

const CalculatorPage = () => (
  <Container>
    <NavbarMain />
    <PricesInfo />
    <SalesTable />
  </Container>
);

export default CalculatorPage;