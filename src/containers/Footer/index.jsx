import React from 'react';

import {
  Container,
  Row,
  Wrapper, 
  Title, 
  LinkStyle,
  SocialFollow, 
  Icons, 
  HrDotted,
  H6,
  LogoWrapper
} from './styles';

import IconFacebook from '../../assets/icons/facebook.JPG';
import IconTwitter from '../../assets/icons/twitter.JPG';
import IconGoogle from '../../assets/icons/google.JPG';
import IconUtube from '../../assets/icons/utube.JPG';
import IconInsta from '../../assets/icons/insta.JPG';
import Logo from '../../assets/images/logo@2x-1.png';

const Footer = () => (
  <Container>
    <LogoWrapper to='/'>
      <img src={Logo} alt="logo"/>
    </LogoWrapper>
    <Row>
      <Wrapper>
        <Title>Автомобили</Title>
          <LinkStyle to='/avto-gm'>Авто GM</LinkStyle>
          <LinkStyle to='/avto-hyundai'>Авто Hyundai</LinkStyle>
          <LinkStyle to='/b/u-avto'>Б/У АВТО</LinkStyle>
      </Wrapper>

      <Wrapper>
        <Title>О нас</Title>
        <LinkStyle to='/contacts'>Контакты</LinkStyle>
        <LinkStyle to='/career'>Карьера</LinkStyle>
      </Wrapper>

      <Wrapper>
        <Title>Следите за нами</Title>
        <SocialFollow>
      <Icons><img src={IconFacebook} alt=""/></Icons>
          <Icons><img src={IconTwitter} alt=""/></Icons>
          <Icons><img src={IconGoogle} alt=""/></Icons>
          <Icons><img src={IconUtube} alt=""/></Icons>
          <Icons><img src={IconInsta} alt=""/></Icons>
        </SocialFollow>
      </Wrapper>
    </Row>
    <HrDotted />
    <H6>© All rights reserved</H6>
  </Container>
);

export default Footer;