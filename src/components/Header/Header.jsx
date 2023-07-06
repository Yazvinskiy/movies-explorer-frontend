import React from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

import './Header.css';
import NavigationAuth from '../NavigationAuth/NavigationAuth';
import Unauthorized from '../Unauthorized/Unauthorized';
import logo from '../../images/header-logo.svg';

const Header = ({loggedIn}) => {
  const mainPage = useMatch('/');
 
  return mainPage && loggedIn ? (
    <header className="header">
      <div className="header__container">
        <Link to={'/'}>
          <img src={logo} alt="header-logo" className="header-logo" />
        </Link>
        <nav className="header__navbar">
        <NavigationAuth />
        </nav>
      </div>
    </header>
  ) 
   : mainPage  ? (
      <header className="header">
      <div className="header__container">
        <Link to={'/'}>
          <img src={logo} alt="header-logo" className="header-logo" />
        </Link>
        <nav className="header__navbar">
        <Unauthorized/>
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
          <NavigationAuth />
        </nav>
      </div>
    </header>
  );
};

export default Header;
