import React from  'react';

import { Container } from './styles';

import DescriptionComponentTwo from '../DescriptionComponentTwo';
import DescriptionComponentThree from '../DescriptionComponentThree';


const CarsDescriptionsOverview = () => (
  <Container>
    <DescriptionComponentTwo />
    <DescriptionComponentThree />
    <DescriptionComponentTwo />
  </Container>
);

export default CarsDescriptionsOverview;