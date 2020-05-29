import React from 'react';
import { Container } from './styles';
import axios from 'axios';

import NavbarMain from '../../containers/Navbar';
import ProductComponent from '../../components/ProductComponent';
import CarouselOfCars from '../../components/CarouselOfCars';
import SalesInstruction from '../../components/SalesInstruction';
import Footer from '../../containers/Footer';

class ProductPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allCars: []
    }
  };

  componentDidMount() {
    axios.get('https://admin.zauto.uz/api/cars')
      .then(res => {
        console.log(res);
        this.setState({
          allCars: res.data
        })
      })
  };

  render() {
    return (
      <Container>
        <NavbarMain />
        <ProductComponent />
        <CarouselOfCars />
        <SalesInstruction />
        <Footer />
      </Container>
    )
  }
};


export default ProductPage;