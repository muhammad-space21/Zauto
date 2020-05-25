import React from 'react';

import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const MenuItems = ({model, imageUrl, price}) => (
  <Container>
    <ImageContainer>
      <img src={imageUrl} alt='cars' />
    </ImageContainer>
    <Model>{model}</Model>
    <Price>{price}</Price>
    <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
  </Container>
);

export default MenuItems;