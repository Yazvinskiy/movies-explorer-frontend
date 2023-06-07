import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/header-logo.svg';

const Header = () => {
  const mainPage = useMatch('/');

  return mainPage ? (
    <header className="header">
      <div className="header__container">
        <Link to={'/'}>
          <img src={logo} alt="header-logo" className="header-logo" />
        </Link>
        <nav className="header__navbar">
          <Link to={'/signup'} className="header__link">
            Регистрация
          </Link>
          <Link to={'/signin'}>
            <button className="header__button">Войти</button>
          </Link>
        </nav>
      </div>
    </header>
  ) : (
    <header className="header-auth">
      <div className="header__container">
        <Link to={'/'}>
          <img src={logo} alt="header-logo" className="header-logo" />
        </Link>
        <nav className="header__navbar">
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

export default Header;
