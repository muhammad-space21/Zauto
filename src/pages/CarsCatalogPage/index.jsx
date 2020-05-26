import React from 'react';

import { Container } from './styles';

import Navbar from '../../containers/Navbar';
import HeaderCarousel from '../../components/Header';
import MarketingCards from '../../components/MarketingCards';
import BrandIcons from '../../components/BrandIcons';
import MenuCarsCatalogPage from '../../components/MenuCarsCatalogPage';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstructions from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const CarsCatalogPage = () => (
  <Container>
    <Navbar />
    <HeaderCarousel />
    <MarketingCards />
    <BrandIcons />
    <MenuCarsCatalogPage />
    <CarouselOfCars />
    <SalesInstructions />
    <Footer />
  </Container>
);

export default CarsCatalogPage;