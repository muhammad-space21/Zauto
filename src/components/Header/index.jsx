import React from 'react';

import { Container, Heading, ButtonContainer } from './styles';
import ButtonPrimary from '../Buttons/ButtonPrimary';


const Header = () => (
  <Container>
    <Heading>
      АВТОМОБИЛИ GM
      И HYUNDAI В РАССРОЧКУ
      <h2>ОТ 60 000 СУМ В ДЕНЬ</h2>
    </Heading>
    <ButtonContainer>
      <ButtonPrimary>Подробнее</ButtonPrimary>
    </ButtonContainer>
  </Container>
);

export default Header;