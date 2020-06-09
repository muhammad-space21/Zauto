import React, { useState } from 'react';

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

export const NavbarMain = () => {
  const [ collapse, setCollapse ] = useState(false);
  return (
    <NavbarStyled collapseOnSelect={true} bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        <img src={BrandLogo} alt="Brand-logo"/> 
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt='icon' /> 
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled onSelect={() => setCollapse(false)} className="ml-auto">
            <NavLinkCustom to="/">Главная</NavLinkCustom>
            <li>
              <NavLinkStyled className='nav-item' to="#1">Автомобили</NavLinkStyled>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="Новые-автомобили">Новые автомобили</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="С-пробегом">С пробегом</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="Новые-автомобили">Новые автомобили</NavLinkHide>
              <NavLinkHide to="С-пробегом">С пробегом</NavLinkHide>
            <NavLinkStyled to="/#5">Как купить</NavLinkStyled>
            {/* <NavLinkStyled to="/#6">Партнеры</NavLinkStyled> */}
            <NavLinkStyled to="/#6">Контакты</NavLinkStyled>
            <NavItemStyled> 
              <HR />
              <img src={IconPhone} alt='icon-phone' /> 
              <a href="tel:99895-479-0770">+99895-479-0770</a>
            </NavItemStyled>
            <NavLinkStyledLogin href="https://login.zauto.uz">
              <img src={IconLogin} alt="icon-login"/> 
              <span>Логин</span>
            </NavLinkStyledLogin>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;