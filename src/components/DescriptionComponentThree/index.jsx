import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Row, 
  Col1, 
  Col2, 
  Model, 
  IconsWrapper, 
  Wrapper,
  Details,
  ModelHide,
  ButtonsWrapper
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

import IconEngine from '../../assets/icons/engine.white.png';
import IconSpeed from '../../assets/icons/speed.white.png';
import IconBag from '../../assets/icons/bag.white.png';


const DescriptionComponentThree = ({
  props, 
  name, 
  petrol, 
  engine, 
  speed,
  image,
  id
}) => {

  const images = [
    {
      original: `https://admin.zauto.uz/${image}`,
      thumbnail: `https://admin.zauto.uz/${image}`
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


  const history = useHistory();
  const routeChange = () => {
    history.push(`/${id}`)
  };

  return (
  <Container {...props}>
    <Row>
      <Col1>
      <ModelHide>{name}</ModelHide>
        <ImageGallery 
          showFullscreenButton={false} 
          showPlayButton={false}  
          items={images} 
          showNav={false}
        />;
      </Col1>
      <Col2>
        <Model>{name}</Model>
        <Wrapper>
            <IconsWrapper marginRight35> 
              <img src={IconEngine} alt="icon"/>
              <Details>{engine}<span>cm3</span></Details>
            </IconsWrapper>
            <IconsWrapper> 
              <img src={IconSpeed} alt="icon"/>
              <Details>{speed}<span>л.с</span></Details>
            </IconsWrapper>
            <IconsWrapper> 
              <img src={IconBag} alt="icon"/>
              <Details>{petrol}<span> л/100km</span></Details>
            </IconsWrapper>
        </Wrapper>
        <ButtonsWrapper>
            <ButtonPrimary 
              applyBtn
              onClick={routeChange}
            >
              Связаться с консультантом
            </ButtonPrimary>
        </ButtonsWrapper>
      </Col2>
    </Row>
  </Container>
  );
};

export default DescriptionComponentThree;