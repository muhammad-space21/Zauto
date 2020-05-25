import React from 'react';

import { 
  Container,
   Card,
   ImageContainer1,
   ImageContainer2,
   ImageContainer3,
   ImageContainer4
   } from './styles';

import IconCalculator from '../../assets/icons/keys.png';
import IconCalendar from '../../assets/icons/calendar.png';
import IconPassport from '../../assets/icons/passport.png';
import IconDocument from '../../assets/icons/business-and-finance.png';

const MarketingCards = () => (
  <Container>
    <Card>
      <ImageContainer1>
        <img src={IconCalculator} alt="calculator"/>
      </ImageContainer1>
      <span>Правила расчета</span>
    </Card>
    <Card>
      <ImageContainer2>
        <img src={IconCalendar} alt="calendar"/>
      </ImageContainer2>
      <span>Рассрочка сроком до 60 месяцев</span>
    </Card>
    <Card>
      <ImageContainer3>
        <img src={IconDocument} alt="document"/>
      </ImageContainer3>
      <span>Автомобиль оформляется на Вас</span>
    </Card>
    <Card>
      <ImageContainer4>
        <img src={IconPassport} alt="passport"/>
      </ImageContainer4>
      <span>Нужен только паспорт</span>
    </Card>
  </Container>
);

export default MarketingCards;