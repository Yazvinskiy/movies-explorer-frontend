import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css';
import logo from '../../images/header-logo.svg';

const Login = ({onSubmit}) => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
  });


  const handleValueSubmit = (data) => {
    
    onSubmit(data);
    reset()
  };

  return (
    <section className="login">
      <div className="auth__container">
        <div className="auth__header">
          <Link to={'/'}>
            <img className="auth__image" src={logo} alt="Логотип" />
          </Link>
          <h2 className="auth__title">Рады видеть!</h2>
        </div>
        <form onSubmit={handleSubmit(handleValueSubmit)}>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="email">
              E-mail
            </label>
            <input
             required
              className="auth__input"
              type="email"          
              {...register('email', {
                required: {
                  value: true,
                  message: 'Введите email',
                },
                minLength: {
                  value: 6,
                  message: 'Некорректный адрес электронной почты',
                },
                pattern: {
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,
                  message: 'Адрес электронной почты невалидный',
                },
              })}
            ></input>
            <p className="input-error">{errors?.email && errors.email.message} </p>
          </div>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="password">
              Пароль
            </label>
            <input
             required
              className="auth__input"
              type="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Введите пароль',
                },
                minLength: {
                  value: 8,
                  message: 'минимальное количество символов 8',
                },
              })}
            ></input>
             <p className="input-error">{errors?.password && errors.password.message} </p>
          </div>
          <button className="auth__button" type='submit' disabled={!isValid}>Войти</button>
        </form>
        <p className="auth__caption">
          Ещё не зарегистрированы?
          <Link to={'/signup'} className="auth__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
