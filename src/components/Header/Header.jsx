import React from 'react';
import './Header.css';
import logo from '../../images/header-logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
      <a href='/'>
      <img src={logo} alt="header-logo"  className='header-logo'/>
      </a>
      <nav className='header__navbar'>
      <a href='/' className='header__link'>Регистрация</a>
      <button className='header__button'>Войти</button>
      </nav>
      </div>
    </header>
  )
}

export default Header