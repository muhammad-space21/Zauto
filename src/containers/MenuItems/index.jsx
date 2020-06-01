import React from 'react';
import { useHistory,useParams } from 'react-router-dom';
import { 
  Container, 
  ImageContainer, 
  Model, 
  Price
} from './styles';

import ButtonPrimary from '../../components/Buttons/ButtonPrimary';


const MenuItems = ( { item, name, image, price } ) => {
  const { id } = useParams();

  const history = useHistory()
  const routeChange = (id) => {
    history.push(`/${item.id}`)
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