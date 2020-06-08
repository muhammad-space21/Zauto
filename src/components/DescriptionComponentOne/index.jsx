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

import IconEngine from '../../assets/icons/engine.black.png';
import IconSpeed from '../../assets/icons/speed.black.png';
import IconBag from '../../assets/icons/bag.black.png';


const DescriptionComponentOne = ({
  props, 
  name, 
  petrol, 
  engine, 
  speed,
  image,
  id,
  gallery
}) => {
  
  const images = [
    {
      original: `https://admin.zauto.uz/${image}`,
      thumbnail: `https://admin.zauto.uz/${image}`
    },
    // {
    //   original: `https://admin.zauto.uz/${image0}`,
    //   thumbnail: `https://admin.zauto.uz/${image0}`
    // },
    // {
    //   original: `https://admin.zauto.uz/${image1}`,
    //   thumbnail: `https://admin.zauto.uz/${image1}`
    // },
    // {
    //   original: `https://admin.zauto.uz/${image2}`,
    //   thumbnail: `https://admin.zauto.uz/${image2}`
    // },
    // {
    //   original: `https://admin.zauto.uz/${image3}`,
    //   thumbnail: `https://admin.zauto.uz/${image3}`
    // },
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
        />
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
              applyBtnWhite
              onClick={routeChange}
            >
              Подробнее
            </ButtonPrimary>
        </ButtonsWrapper>
      </Col2>
    </Row>
  </Container>
  );
};

export default DescriptionComponentOne;