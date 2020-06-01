import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


const MenuItems = ( { item, name, image, price, id } ) => {
  const history = useHistory();
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
      <Price>ОТ {price} сум / ДЕНЬ</Price>
      <ButtonPrimary orderBtn>Подробнее</ButtonPrimary>
    </Container>
  )
};

export default MenuItems;
