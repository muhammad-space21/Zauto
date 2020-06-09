import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import MarketingCards from '../../components/MarketingCards';
// import BestSalesCarousel from '../../containers/BestSalesCarousel';
import MenuCars from '../../containers/MenuCars';
import CarouselOfCars from '../../containers/CarouselOfCars';
import CarsDescriptionsOverview from '../../containers/CarsDescriptionsOverview';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../components/Footer';

const Homepage = () => (
  <Container>
    <Navbar />
    <Header />
    <MarketingCards />
    {/* <BestSalesCarousel /> */}
    <MenuCars />
    <CarouselOfCars />
    <CarsDescriptionsOverview />
    <SalesInstruction />
    <Footer />
  </Container>
);

export default Homepage;