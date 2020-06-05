import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


const MenuItems = ( { id, name, image, price_per_month } ) => {
  const history = useHistory();
  const routeChange = () => {
    history.push(`/${id}`)
  };

  return (
    <Container onClick={routeChange}>
      <ImageContainer>
        <img src={`https://admin.zauto.uz/${image}`} alt='cars' />
      </ImageContainer>
      <Model>{name}</Model>
      <Price>ОТ {price_per_month} сум / месяц</Price>
      <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
    </Container>
  )
};

export default MenuItems;