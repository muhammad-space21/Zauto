import React from 'react';

import {
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';

const MenuItems = ({name, image, price, sluggable }) => {

  return (
    <Container>
      <ImageContainer to={`product/${sluggable}`} >
        <img src={`https://admin.zauto.uz/${image}`} alt='cars' />
      </ImageContainer>
      <Model to={`product/${sluggable}`} >{name}</Model>
      <Price  to={`product/${sluggable}`} >ОТ {price} сум / ДЕНЬ</Price>
      <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
    </Container>
  )
};

export default MenuItems;