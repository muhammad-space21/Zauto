import React from 'react';

import { Container } from './styles';

import CarsDescriptionComponent from '../../components/DescriptionComponentOne';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const DescriptionPage = () => (
  <Container>
    <CarsDescriptionComponent descriptionPage />
    <CarouselOfCars />
    <SalesInstruction />
    <Footer />
  </Container>
);

export default DescriptionPage;