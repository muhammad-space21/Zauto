import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


const MenuItems = ( { id, name, image, price_per_month } ) => {
  const history = useHistory();
  // const { id } = useParams();
  const routeChange = () => {
    console.log('id of menu', id)
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