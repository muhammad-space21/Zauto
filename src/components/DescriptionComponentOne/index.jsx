import React from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';

import {
  Container,
  Row, 
  Col1, 
  Col2, 
  Title, 
  Model, 
  IconsWrapper, 
  Wrapper,
  Details,
  Type,
  ModelHide,
  ButtonsWrapper,
  IconsWrapperCustom
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

import IconEngine from '../../assets/icons/engine.black.png';
import IconSpeed from '../../assets/icons/speed.black.png';
import IconBag from '../../assets/icons/bag.black.png';

const images = [
  {
    original: 'https://hosty.xxx/i/2ea5404e4f30d46f163ab1640ec25cde3c2077c2.jpg',
    thumbnail: 'https://hosty.xxx/i/2ea5404e4f30d46f163ab1640ec25cde3c2077c2.jpg'
  },
  {
    original: 'https://hosty.xxx/i/77c4fd4049fddfadc2734075cc56a8c2f034b4f2.jpg',
    thumbnail: 'https://hosty.xxx/i/77c4fd4049fddfadc2734075cc56a8c2f034b4f2.jpg'
  },
  {
    original: 'https://hosty.xxx/i/1b7d1c49a8531b89d8071c3295a098691ea166ac.jpg',
    thumbnail: 'https://hosty.xxx/i/1b7d1c49a8531b89d8071c3295a098691ea166ac.jpg'
  },
  {
    original: 'https://hosty.xxx/i/dc02d89e3f23d7c60c393aee11972e1e58ac2cff.jpg',
    thumbnail: 'https://hosty.xxx/i/dc02d89e3f23d7c60c393aee11972e1e58ac2cff.jpg'
  },
  {
    original: 'https://hosty.xxx/i/90f2669b0fc3b8ac71d0f2439021d1a0ea66271c.jpg',
    thumbnail: 'https://hosty.xxx/i/90f2669b0fc3b8ac71d0f2439021d1a0ea66271c.jpg'
  }
];


class DescriptionComponentOne extends React.Component {
  constructor() {
    super()
    this.state = {
      allCars: []
    }
  };


  componentDidMount() {    
    axios.get(`https://admin.zauto.uz/api/cars`)
      .then(res => {
        console.log(res);
        this.setState({
          allCars: res.data
        })
      })
  };

  render() {
    const { allCars } = this.state; 
    return (
    <Container>
      <Row>
        <Col1>
          <ModelHide>{allCars.name}</ModelHide>
          <ImageGallery 
            showFullscreenButton={false} 
            showPlayButton={false}  
            items={images}
            showNav={false}
          />
        </Col1>
        <Col2>
          <Title>АВТОМОБИЛЬ В КРЕДИТ</Title>
          <Model>{allCars.name}</Model>
          <Type>УДОБНЫЙ ГОРОДСКОЙ АВТОМОБИЛЬ</Type>
          <Wrapper>
              <IconsWrapperCustom marginRight35> 
                <img src={IconEngine} alt="icon"/>
                <Details>{allCars.engine} <span>cm3</span></Details>
              </IconsWrapperCustom>
              <IconsWrapperCustom> 
                <img src={IconSpeed} alt="icon"/>
                <Details>{allCars.speed} <span>л.с</span></Details>
              </IconsWrapperCustom>
              <IconsWrapper> 
                <img src={IconBag} alt="icon"/>
                <Details>{allCars.petrol}<span> л/100km</span></Details>
              </IconsWrapper>
          </Wrapper>
          <ButtonsWrapper>
              <ButtonPrimary applyBtnWhite>Предоплата 35%</ButtonPrimary>
              <ButtonPrimary applyBtnWhite>Предоплата 50%</ButtonPrimary>
          </ButtonsWrapper>
        </Col2>
      </Row>
    </Container>
    )
  }
};

export default DescriptionComponentOne;