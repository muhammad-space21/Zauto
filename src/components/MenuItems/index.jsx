import React from 'react';

import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const MenuItems = ({name, image, price}) => (
  <Container>
    <ImageContainer>
      <img src={image} alt='cars' />
    </ImageContainer>
    <Model>{name}</Model>
    <Price>{price}</Price>
    <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
  </Container>
);

export default MenuItems;