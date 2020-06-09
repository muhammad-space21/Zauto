import React from 'react';

import {
  Container,
  Row,
  Wrapper, 
  Title, 
  Title1,
  SocialFollow, 
  Icons, 
  HrDotted,
  H6,
  Hr,
  LogoWrapper,
  Col,
  Col2,
  Row2,
  Number,
  Address,
  Reserved,
  TitleHide
} from './styles';

import IconFacebook from '../../assets/icons/facebook.JPG';
import IconInsta from '../../assets/icons/insta.JPG';
import Logo from '../../assets/images/logo@2x-1.png';

const Footer = () => (
  <Container id="6">
    <Row>
      <Col>
        <Title to="Публичная-оферта">Публичная оферта</Title>
        <Title to="Стать-партнером">Стать партнером</Title>
        <Title to="Частые-вопросы">Частые вопросы</Title>
        <TitleHide>Мы в соцсетях</TitleHide>
      </Col>
      <Col2>
        <Wrapper>
          <SocialFollow>
            <Icons href='https://www.facebook.com/zauto.uz'>
              <img src={IconFacebook} alt=""/>
            </Icons>
            <Icons href='https://www.instagram.com/zauto.uz/'>
              <img src={IconInsta} alt=""/>
            </Icons>
          </SocialFollow>
        </Wrapper>
      </Col2>
    </Row>
    <Hr />
    <Row2>
      <Wrapper>
        <LogoWrapper to='/'>
        <img src={Logo} alt="logo"/>
      </LogoWrapper>
      </Wrapper>
      <Wrapper>
        <H6>СЛУЖБА ПОДДЕРЖКИ</H6>
          <Number href="tel:998 95 479 0770">+998 95 479 0770</Number>
          <Number href="tel:998 95 479 7007">+998 95 479 7007</Number>
        <Address>
          Узбекистан, г. Ташкент, Юнусабадский
          <br />
          район, ул. Корходжи Ота, дом 3
        </Address>
      </Wrapper>
      <Wrapper>
        <Title1>Время работы</Title1>
        <Title1>09:00 - 19:00</Title1>
        <Title1>Пн - Сб</Title1>
      </Wrapper>
    </Row2>
    <HrDotted />
    <Reserved>OOO «ZAAMIN-MARKET» © 2020. Все права защищены</Reserved>
  </Container>
);

export default Footer;