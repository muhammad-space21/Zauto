import React from 'react';

import { 
  Container, 
  Row, 
  Heading, 
  ImgChevrolet, 
  ImgHyundai,
  ImgLada
} from './styles';

import LogoHyndai from '../../assets/icons/hyunda.png';
import LogoLada from '../../assets/icons/lada.png';
import LogoChevrolet from '../../assets/icons/chevrolet.png';



const BrandIcons = () => {
  return (
    <Container>
      <Heading> Выберите модель автомобиля </Heading>
      <Row>
        <ImgHyundai>
          <img src={LogoHyndai} alt="logo-hyundai"/>
        </ImgHyundai>
        <ImgChevrolet>
          <img src={LogoChevrolet} alt="logo-gm"/>
        </ImgChevrolet>
        <ImgLada>
          <img src={LogoLada} alt=""/>
        </ImgLada>
      </Row>
    </Container>
  );
};

export default BrandIcons;