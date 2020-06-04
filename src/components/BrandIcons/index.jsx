import React from 'react';

import { 
  ContainerBrandIcons, 
  RowBrandIcons, 
  Heading, 
  ImgChevrolet, 
  ImgHyundai,
  ImgLada
} from './styles';

import LogoHyndai from '../../assets/icons/hyunda.png';
import LogoLada from '../../assets/icons/lada.png';
import LogoChevrolet from '../../assets/icons/chevrolet.png';



const BrandIcons = (props) => {
  return (
    <Container>
      <Heading> Выберите модель автомобиля </Heading>
      <Row>
        <ImgHyundai>
          <img src={LogoHyndai} onClick={() => props.handleHyundai()} alt="logo-hyundai"/>
        </ImgHyundai>
        <ImgChevrolet>
          <img src={LogoChevrolet} onClick={() => props.handleChevrolet()} alt="logo-gm"/>
        </ImgChevrolet>
        <ImgLada>
          <img src={LogoLada} onClick={() => props.handleLada()} alt=""/>
        </ImgLada>
      </Row>
    </Container>
  );
};

export default BrandIcons;