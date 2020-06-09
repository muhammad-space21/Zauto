import React from 'react';

import {
  Container, 
  Heading, 
  Row,
  Card,
  Title,
  Text,
  BtnWrapper
} from './styles';

// import ButtonPrimary from '../Buttons/ButtonPrimary';

import IconCertificate from '../../assets/icons/certificate.png';
import IconStartup from '../../assets/icons/startup.png';
import IconDomain from '../../assets/icons/domain-registration.png';
import IconMarketing from '../../assets/icons/viral-marketing.jpg';

const SalesInstruction = () => {
  return (
    <Container id="5" >
      <Heading>Как купить в рассрочку ?</Heading>
      <Row>
        <Card>
          <img src={IconDomain} alt="icon"/>
          <Title>Выберите авто</Title>
          <Text>
              Выберите подходящий для Вас автомобиль. 
              Подберите для себя цвет, характеристики, 
              дополнительные опции автомобиля и оставьте заявку.
          </Text>
          <BtnWrapper>
              {/* <ButtonPrimary secondary>ВЫБРАТЬ АВТО</ButtonPrimary> */}
          </BtnWrapper>
        </Card>
        <Card>
          <img src={IconMarketing} alt="icon"/>
          <Title>Обработка заявки</Title>
          <Text>С Вами свяжеться наш сотрудник для уточнения данных по Вашей заявке.</Text>
          <BtnWrapper>
              {/* <ButtonPrimary secondary>ОСТАВИТЬ ЗАЯВКУ</ButtonPrimary> */}
          </BtnWrapper>
        </Card>
      </Row>
      <Row>
      <Card>
          <img src={IconCertificate} alt="icon"/>
          <Title>Оформите договор</Title>
          <Text>
              Оформите договор и внести первоначальный взнос за автомобиль. 
              После всей процедуры Вы в скором времени получите свой автомобиль.
          </Text>
          <BtnWrapper>
              {/* <ButtonPrimary secondary>ОСТАВИТЬ ЗАЯВКУ</ButtonPrimary> */}
          </BtnWrapper>
        </Card>
        <Card>
          <img src={IconStartup} alt="icon"/>
          <Title>Получите авто</Title>
          <Text>
              Наслаждайтесь покупкой и гарантийным обслуживанием. 
              Платите маленькими платежами и получайте бонусы ZMARKET
          </Text>
          <BtnWrapper>
              {/* <ButtonPrimary secondary>ПОЛУЧИТЬ АВТО</ButtonPrimary> */}
          </BtnWrapper>
        </Card>
      </Row>
    </Container>
  )
};

export default SalesInstruction;