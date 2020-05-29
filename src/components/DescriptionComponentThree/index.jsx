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

import IconEngine from '../../assets/icons/engine.white.png';
import IconSpeed from '../../assets/icons/speed.white.png';
import IconBag from '../../assets/icons/bag.white.png';

const images = [
  {
    original: 'https://hosty.xxx/i/313dd308deab8e15d2f36ec008f69587e0d9f553.jpg',
    thumbnail: 'https://hosty.xxx/i/313dd308deab8e15d2f36ec008f69587e0d9f553.jpg'
  },
  {
    original:  'https://hosty.xxx/i/9c65fe60f6fd887f4651167d6cbfa9a6665045d5.jpg',
    thumbnail:  'https://hosty.xxx/i/9c65fe60f6fd887f4651167d6cbfa9a6665045d5.jpg'
  },
  {
    original: 'https://hosty.xxx/i/360625a60bd262a5ef6c792433e4a6e7a26296c0.jpg',
    thumbnail: 'https://hosty.xxx/i/360625a60bd262a5ef6c792433e4a6e7a26296c0.jpg'
  },
  {
    original: 'https://hosty.xxx/i/6d5a98a4eb7b673eedc5d20ec130f08752b65872.jpg',
    thumbnail: 'https://hosty.xxx/i/6d5a98a4eb7b673eedc5d20ec130f08752b65872.jpg'
  },
  {
    original: 'https://hosty.xxx/i/96c4c6371c659fcd8b93ab1815f70de713ca5c4e.jpg',
    thumbnail: 'https://hosty.xxx/i/96c4c6371c659fcd8b93ab1815f70de713ca5c4e.jpg'
  }
];


const DescriptionComponentThree = (props) => (
  <Container {...props}>
    <Row>
      <Col1>
      <ModelHide>Elantra MPI 1.6</ModelHide>
        <ImageGallery 
          // showFullscreenButton={false} 
          // showPlayButton={false}  
          items={images} 
          showNav={false}
        />
      </Col1>
      <Col2>
        <Title>АВТОМОБИЛЬ В КРЕДИТ</Title>
        <Model>Elantra MPI 1.6</Model>
        <Type>УДОБНЫЙ ГОРОДСКОЙ АВТОМОБИЛЬ</Type>
        <Wrapper>
            <IconsWrapperCustom marginRight35> 
              <img src={IconEngine} alt="icon"/>
              <Details>1,6 <span>cm3</span></Details>
            </IconsWrapperCustom>
            <IconsWrapperCustom> 
              <img src={IconSpeed} alt="icon"/>
              <Details>128 <span>л.с</span></Details>
            </IconsWrapperCustom>
            <IconsWrapper> 
              <img src={IconBag} alt="icon"/>
              <Details>6,6<span> л/100km</span></Details>
            </IconsWrapper>
        </Wrapper>
        <ButtonsWrapper>
            <ButtonPrimary applyBtn>Предоплата 35%</ButtonPrimary>
            <ButtonPrimary applyBtn>Предоплата 50%</ButtonPrimary>
        </ButtonsWrapper>
      </Col2>
    </Row>
  </Container>
);

export default DescriptionComponentThree;