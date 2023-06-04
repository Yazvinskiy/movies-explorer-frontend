import React from 'react';

import './Login.css';
import logo from '../../images/header-logo.svg';

const Login = () => {
  return (
    <section className='login'>
      <div className="auth__container">
        <div className='auth__header'>
        <a href='/'><img className="auth__image" src={logo} alt="Логотип" /></a>
          <h2 className="auth__title">Рады видеть!</h2>
        </div>
        <form>
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
          <button className="auth__button">Войти</button>
        </form>
        <p className="auth__caption">
        Ещё не зарегистрированы?
          <a href="/" className="auth__link">
          Регистрация
          </a>
        </p>
      </div>

    </section>
  )
}

export default Login