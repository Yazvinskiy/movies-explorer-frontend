import React from 'react';
import {Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/header-logo.svg';

const Login = () => {
  return (
    <section className='login'>
      <div className="auth__container">
        <div className='auth__header'>
        <Link to={'/'}><img className="auth__image" src={logo} alt="Логотип" /></Link>
          <h2 className="auth__title">Рады видеть!</h2>
        </div>
        <form>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="email">
              E-mail
            </label>
            <input className="auth__input" type="email" name="email"></input>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="bread">
              Пароль
            </label>
            <input
              className="auth__input"
              type="password"
              name="password"
            ></input>
          </div>
          <button className="auth__button">Войти</button>
        </form>
        <p className="auth__caption">
        Ещё не зарегистрированы?
          <Link to={"/signup"} className="auth__link">
          Регистрация
          </Link>
        </p>
      </div>

    </section>
  )
}

export default Login