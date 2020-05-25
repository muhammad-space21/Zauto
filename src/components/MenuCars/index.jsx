import React from 'react';
import {connect} from 'react-redux';
import { 
  Container, 
  Heading,  
  Row,
  BtnWrapper
} from './styles';

import {getAllCars} from '../../redux/allCars/allCarsActions';
import MenuItems from '../MenuItems';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import { data } from '../../mockData/index';

const MenuCars = () => {
  const { carsDataMenu } = data;

  return (
    <Container>
      <Heading>
          Выберите Автомобиль в Рассрочку
      </Heading>
      <Row>
        { carsDataMenu.map(({id, ...otherProps}) =>
          (<MenuItems key={id} {...otherProps} />)
        )}
      </Row>
      <BtnWrapper> 
        <ButtonPrimary primary>Все aвтомобили</ButtonPrimary>
      </BtnWrapper>
    </Container>
  );
};



export default MenuCars;