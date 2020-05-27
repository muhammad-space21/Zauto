import React from 'react';

import { Container } from './styles';

import NavbarMain from '../../containers/Navbar';
import CarsDescriptionComponent from '../../components/DescriptionComponentOne';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const ProductPage = () => (
  <Container>
    <NavbarMain />
    <CarsDescriptionComponent />
    <CarouselOfCars />
    <SalesInstruction />
    <Footer />
  </Container>
);

export default ProductPage;