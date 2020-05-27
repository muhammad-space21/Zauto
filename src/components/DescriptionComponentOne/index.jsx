import React from 'react';
import ImageGallery from 'react-image-gallery';

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
  ButtonsWrapper
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


const DescriptionComponentOne = (props) => (
  <Container {...props}>
    <Row>
      <Col1>
      <ModelHide>Accent MPI 1.4</ModelHide>
        <ImageGallery 
          showFullscreenButton={false} 
          showPlayButton={false}  
          items={images}
          showNav={false}
        />
      </Col1>
      <Col2>
        <Title>АВТОМОБИЛЬ В КРЕДИТ</Title>
        <Model>Accent MPI 1.4</Model>
        <Type>УДОБНЫЙ ГОРОДСКОЙ АВТОМОБИЛЬ</Type>
        <Wrapper>
            <IconsWrapper> 
              <img src={IconEngine} alt="icon"/>
              <Details>1,4 <span>cm3</span></Details>
            </IconsWrapper>
            <IconsWrapper> 
              <img src={IconSpeed} alt="icon"/>
              <Details>123 <span>л.с</span></Details>
            </IconsWrapper><IconsWrapper> 
              <img src={IconBag} alt="icon"/>
              <Details>6,6<span> л/100km</span></Details>
            </IconsWrapper>
        </Wrapper>
        <ButtonsWrapper>
            <ButtonPrimary applyBtnWhite>Предоплата 35%</ButtonPrimary>
            <ButtonPrimary applyBtnWhite>Предоплата 50%</ButtonPrimary>
        </ButtonsWrapper>
      </Col2>
    </Row>
  </Container>
);

export default DescriptionComponentOne;