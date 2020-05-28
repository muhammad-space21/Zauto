import React from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyled,
  NavLinkStyledDropdown,
  NavItemStyled,
  HR,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLinkStyledLogin,
  NavLinkHide,
  NavLinkCustom
} from './styles';

import './styles.scss';

import IconPhone from '../../assets/icons/phone-icon.png';
import IconMenu from '../../assets/icons/menu-icon.png';
import BrandLogo from '../../assets/images/logo@2x-1.png';
import IconLogin from '../../assets/icons/login.png';

export const NavbarMain = () => (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        <img src={BrandLogo} alt="Brand-logo"/> 
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt='icon' /> 
      </NavbarToggle>
      <NavbarCollapse id="responsive-navbar-nav">
        <NavStyled className="ml-auto">
          <NavLinkCustom href="#home">Главная</NavLinkCustom>
          <li>
            <a className='nav-item' href="#">Автомобили</a>
            <ul className="sub-menu">
              <NavLinkStyledDropdown href="#link">Новые автомобили</NavLinkStyledDropdown>
              <NavLinkStyledDropdown href="#link">С пробегом</NavLinkStyledDropdown>
            </ul>
          </li>
            <NavLinkHide href="#link">Новые автомобили</NavLinkHide>
            <NavLinkHide href="#link">С пробегом</NavLinkHide>
          <NavLinkStyled href="#link">Как купить</NavLinkStyled>
          <NavLinkStyled href="#link">Партнеры</NavLinkStyled>
          <NavLinkStyled href="#Контакты">Контакты</NavLinkStyled>
          <NavItemStyled> 
            <HR />
            <img src={IconPhone} alt='icon-phone' /> 
            <span>+99895-479-0770</span>
          </NavItemStyled>
          <NavLinkStyledLogin href="#link">
            <img src={IconLogin} alt="icon-login"/> 
            <span>Логин</span>
          </NavLinkStyledLogin>
        </NavStyled>
      </NavbarCollapse>
    </NavbarStyled>
);

export default NavbarMain;