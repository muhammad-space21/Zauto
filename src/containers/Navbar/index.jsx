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
            <NavLinkCustom href="/">Главная</NavLinkCustom>
            <li>
              <a className='nav-item' href="#">Автомобили</a>
              <ul className="sub-menu">
                <NavLinkStyledDropdown href="Новые-автомобили">Новые автомобили</NavLinkStyledDropdown>
                <NavLinkStyledDropdown href="С-пробегом">С пробегом</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide href="Новые-автомобили">Новые автомобили</NavLinkHide>
              <NavLinkHide href="С-пробегом">С пробегом</NavLinkHide>
            <NavLinkStyled href="Как-купить">Как купить</NavLinkStyled>
            <NavLinkStyled href="Партнеры">Партнеры</NavLinkStyled>
            <NavLinkStyled href="Контакты">Контакты</NavLinkStyled>
            <NavItemStyled> 
              <HR />
              <img src={IconPhone} alt='icon-phone' /> 
              <span>+99895-479-0770</span>
            </NavItemStyled>
            <NavLinkStyledLogin href="https://login.zauto.uz">
              <img src={IconLogin} alt="icon-login"/> 
              <span>Логин</span>
            </NavLinkStyledLogin>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
);

export default NavbarMain;