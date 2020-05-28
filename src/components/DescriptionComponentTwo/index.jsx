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
  ButtonsWrapper,
  IconsWrapperCustom
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

import IconEngine from '../../assets/icons/engine.black.png';
import IconSpeed from '../../assets/icons/speed.black.png';
import IconBag from '../../assets/icons/bag.black.png';

const images = [
  {
    original: 'https://hosty.xxx/i/6bef47d58d63bd9e7bf674737a52e237d7b9f6a0.jpg',
    thumbnail: 'https://hosty.xxx/i/6bef47d58d63bd9e7bf674737a52e237d7b9f6a0.jpg'
  },
  {
    original:  'https://hosty.xxx/i/fd29e6764e5be276c3ee05bae5bca81227679718.jpg',
    thumbnail:  'https://hosty.xxx/i/fd29e6764e5be276c3ee05bae5bca81227679718.jpg'
  },
  {
    original: 'https://hosty.xxx/i/57221533061a8b36cb157abdc64884cd8c697a15.jpg',
    thumbnail: 'https://hosty.xxx/i/57221533061a8b36cb157abdc64884cd8c697a15.jpg'
  },
  {
    original: 'https://hosty.xxx/i/469e647ce93c581b779da040a3817cb01ac53dae.jpg',
    thumbnail: 'https://hosty.xxx/i/469e647ce93c581b779da040a3817cb01ac53dae.jpg'
  },
  {
    original: 'https://hosty.xxx/i/1fbe205631194102a05065c27861c0f05d3f889c.jpg',
    thumbnail: 'https://hosty.xxx/i/1fbe205631194102a05065c27861c0f05d3f889c.jpg'
  }
];


const DescriptionComponentTwo = (props) => (
  <Container {...props}>
    <Row>
      <Col1>
      <ModelHide>Tucson MPI 2.0</ModelHide>
        <ImageGallery 
          showFullscreenButton={false} 
          showPlayButton={false}  
          items={images} 
          showNav={false}
        />;
      </Col1>
      <Col2>
        <Title>АВТОМОБИЛЬ В КРЕДИТ</Title>
        <Model>Tucson MPI 2.0</Model>
        <Type>ГОРОДСКОЙ КРОССОВЕР АВТОМОБИЛЬ</Type>
        <Wrapper>
            <IconsWrapperCustom marginRight35> 
              <img src={IconEngine} alt="icon"/>
              <Details>2,0 <span>cm3</span></Details>
            </IconsWrapperCustom>
            <IconsWrapperCustom> 
              <img src={IconSpeed} alt="icon"/>
              <Details>149 <span>л.с</span></Details>
            </IconsWrapperCustom>
            <IconsWrapper> 
              <img src={IconBag} alt="icon"/>
              <Details>8,2<span> л/100km</span></Details>
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

export default DescriptionComponentTwo;