import React from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyled,
  NavLinkStyledBlack,
  NavItemStyled,
  HR,
  NavbarBrand,
  NavbarToggle,
  NavLinkStyledLogin
} from './styles';

import './styles.scss';

import { Navbar } from 'react-bootstrap';
import IconPhone from '../../assets/icons/phone-icon.png';
import IconMenu from '../../assets/icons/menu-icon.png';
import BrandLogo from '../../assets/images/logo@2x-1.png';
import IconLogin from '../../assets/icons/login.png';

export const NavbarMain = () => (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        <img src={BrandLogo} alt="Brand-logo"/> 
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav"> <img src={IconMenu} alt='icon' /> </NavbarToggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavStyled className="ml-auto">
          <NavLinkStyled href="#home">Главная</NavLinkStyled>
          <li><a className='nav-item' href="Автомобили">Автомобили</a>
            <ul className="sub-menu">
              <NavLinkStyledBlack href="#link">Новые автомобили</NavLinkStyledBlack>
              <NavLinkStyledBlack href="#link">С пробегом</NavLinkStyledBlack>
            </ul>
          </li>        
          <NavLinkStyled href="#link">Как купить</NavLinkStyled>
          <NavLinkStyled href="#link">Партнеры</NavLinkStyled>
          <NavLinkStyled href="#Контакты">Контакты</NavLinkStyled>
          <NavItemStyled> 
            <HR />
            <img src={IconPhone} alt='icon-phone' /> 
            <span>+99895-479-0770</span>
          </NavItemStyled>
          <NavLinkStyledLogin href="#link">
            <span>Логин</span>
            <img src={IconLogin} alt="icon-login"/> 
          </NavLinkStyledLogin>
        </NavStyled>
      </Navbar.Collapse>
    </NavbarStyled>
);

export default NavbarMain;