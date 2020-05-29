import React from 'react';

import { Container } from './styles';

import Navbar from '../../containers/Navbar';
import HeaderCarousel from '../../components/Header';
import MarketingCards from '../../components/MarketingCards';
import BestSalesCarousel from '../../components/BestSalesCarousel';
import BrandIcons from '../../components/BrandIcons';
import MenuCars from '../../containers/MenuCars';
import CarouselOfCars from '../../components/CarouselOfCars';
import CarsDescriptionsOverview from '../../components/CarsDescriptionsOverview';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

const Homepage = () => (
  <Container>
    <Navbar />
    <HeaderCarousel />
    <MarketingCards />
    <BestSalesCarousel />
    <BrandIcons />
    <MenuCars />
    <CarouselOfCars />
    <CarsDescriptionsOverview />
    <SalesInstruction />
    <Footer />
  </Container>
);

export default Homepage;