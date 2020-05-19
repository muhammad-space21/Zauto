import React from 'react';

import { 
  Container, 
  Row, 
  Heading, 
  ImgGm, 
  ImgHyundai 
} from './styles';

import LogoGM from '../../assets/icons/gm.logo.png';
import LogoHyundai from '../../assets/icons/hyundo.logo.png';


const BrandIcons = () => {
  return (
    <Container>
      <Heading>ВЫБЕРИ СЕБЕ АВТО</Heading>
      <Row>
        <ImgGm>
          <img src={LogoGM} alt="logo-gm"/>
        </ImgGm>
        <ImgHyundai>
          <img src={LogoHyundai} alt="logo-hyundai"/>
        </ImgHyundai>
      </Row>
    </Container>
  );
};

export default BrandIcons;