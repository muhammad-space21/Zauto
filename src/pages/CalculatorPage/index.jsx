import React from 'react';

import { Container } from './styles';

import PricesInfo from '../../components/PricesInfo';
import SalesTable from '../../components/PricesTable';

const CalculatorPage = () => (
  <Container>
    <PricesInfo />
    <SalesTable />
  </Container>
);

export default CalculatorPage;