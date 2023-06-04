import React from 'react';

import logo from '../../images/header-logo.svg';
import './Register.css';

const Register = () => {
  return (
    <section className="registration">
      <div className="auth__container">
        <div className='auth__header'>
          <a><img className="auth__image" src={logo} alt="Логотип" /></a>
          <h2 className="auth__title">Добро пожаловать!</h2>
        </div>
        <form>
          <div className="wrapper__input">
            <label className="auth__label" for="name">
              Имя
            </label>
            <input className="auth__input" type="text" name="name"></input>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" for="email">
              E-mail
            </label>
            <input className="auth__input" type="email" name="email"></input>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" for="bread">
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
          <a href="/" className="auth__link">
            Войти
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
