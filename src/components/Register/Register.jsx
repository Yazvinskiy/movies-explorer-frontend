import React from 'react';
import {Link } from 'react-router-dom';

import logo from '../../images/header-logo.svg';
import './Register.css';

const Register = () => {
  return (
    <section className="registration">
      <div className="auth__container">
        <div className='auth__header'>
          <Link to={'/'}><img className="auth__image" src={logo} alt="Логотип" /></Link>
          <h2 className="auth__title">Добро пожаловать!</h2>
        </div>
        <form>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="name">
              Имя
            </label>
            <input className="auth__input" type="text" name="name"></input>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="email">
              E-mail
            </label>
            <input className="auth__input" type="email" name="email"></input>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="auth__input"
              type="password"
              name="password"
            ></input>
          </div>
          <button className="auth__button">Зарегистрироваться</button>
        </form>
        <p className="auth__caption">
          Уже зарегистрированы?
          <Link to={'/signin'} className="auth__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
