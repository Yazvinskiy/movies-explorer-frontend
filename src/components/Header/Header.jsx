import React from 'react';
import {Link } from 'react-router-dom';

import './Header.css';
import Navigation from '../Navigation/Navigation'
import logo from '../../images/header-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={'/'}>
          <img src={logo} alt="header-logo" className="header-logo" />
        </Link>  
        <nav className="header__navbar">
        <Navigation/>
          {/* <Link to={'/signup'} className="header__link">
            Регистрация
          </Link>
          <Link to={'/signin'}>
            <button className="header__button">Войти</button>
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
