import React from  'react';

import { Container } from './styles';

import DescriptionComponentOne from '../DescriptionComponentOne';
import DescriptionComponentTwo from '../DescriptionComponentTwo';
import DescriptionComponentThree from '../DescriptionComponentThree';


const CarsDescriptionsOverview = () => (
  <Container>
    <DescriptionComponentOne />
    <DescriptionComponentThree />
    <DescriptionComponentTwo />
  </Container>
);

export default CarsDescriptionsOverview;