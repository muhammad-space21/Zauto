import React from 'react';
import { useHistory, useParams, Link } from "react-router-dom";

import {
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../Buttons/ButtonPrimary';

const MenuItems = ({name, image, price, sluggable }) => {
  return (
    <Container>
      <ImageContainer onClick={() => <Link to/>}>
        <img src={`https://admin.zauto.uz/${image}`} alt='cars' />
      </ImageContainer>
      <Model to={`product/${sluggable}`}>{name}</Model>
      <Price>ОТ {price} сум / ДЕНЬ</Price>
      <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
    </Container>
  )
};

export default MenuItems;