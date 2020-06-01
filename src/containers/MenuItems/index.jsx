import React from 'react';
import {use
import { Location, useParams, withRouter, Route} from 'react-router-dom';
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import ProductComponent from '../ProductComponent';

const MenuItems = ( { name, image, price, sluggable } ) => {

  return (
    <Container to={`/item/${sluggable}`} >
      <ImageContainer>
        <img src={`https://admin.zauto.uz/${image}`} alt='cars' />
      </ImageContainer>
      <Model>{name}</Model>
      <Price>ОТ {price} сум / ДЕНЬ</Price>
      <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
    </Container>
  )
};

export default MenuItems;