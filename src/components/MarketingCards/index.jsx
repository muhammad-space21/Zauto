import React from 'react';

import { 
  Container,
  Card,
  ImageContainer
} from './styles';

import IconGuarantee from '../../assets/icons/gurantee.png';
import IconCalendar from '../../assets/icons/calendar.png';
import IconPassport from '../../assets/icons/passport.png';
import IconDocument from '../../assets/icons/business-and-finance.png';

const MarketingCards = () => (
  <Container>
    <Card>
      <ImageContainer>
        <img src={IconGuarantee} alt="guarantee"/>
      </ImageContainer>
      <span>3 года гарантии</span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={IconCalendar} alt="calendar"/>
      </ImageContainer>
      <span>Рассрочка сроком до 60 месяцев</span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={IconDocument} alt="document"/>
      </ImageContainer>
      <span>Автомобиль оформляется на Вас</span>
    </Card>
    <Card>
      <ImageContainer>
        <img src={IconPassport} alt="passport"/>
      </ImageContainer>
      <span>Нужен только паспорт</span>
    </Card>
  </Container>
);

export default MarketingCards;