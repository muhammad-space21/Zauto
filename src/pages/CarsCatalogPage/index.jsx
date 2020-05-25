import React from 'react';

import {Container} from './styles';

import Navbar from '../../containers/Navbar';
import HeaderCarousel from '../../components/Header';
import MarketingCards from '../../components/MarketingCards';
import BrandIcons from '../../components/BrandIcons';
import MenuCars from '../../components/MenuCars';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstructions from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const CarsCatalogPage = () => (
  <Container>
    <Navbar />
    <HeaderCarousel />
    <MarketingCards />
    <BrandIcons />
    <MenuCars catalog />
    <CarouselOfCars />
    <SalesInstructions />
    <Footer />
  </Container>
);

export default CarsCatalogPage;