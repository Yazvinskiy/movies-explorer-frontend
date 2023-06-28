import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import logo from '../../images/header-logo.svg';
import './Register.css';

const Register = ({onSubmit}) => {
 
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
    <section className="registration">
      <div className="auth__container">
        <div className="auth__header">
          <Link to={'/'}>
            <img className="auth__image" src={logo} alt="Логотип" />
          </Link>
          <h2 className="auth__title">Добро пожаловать!</h2>
        </div>
        <form onSubmit={handleSubmit(handleValueSubmit)}>
          <div className="wrapper__input">
            <label className="auth__label" htmlFor="name">
              Имя
            </label>
            <input
             required
              className="auth__input"
              type="text"
              name="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Введите имя',
                },
                minLength: {
                  value: 2,
                  message: 'минимальное количество символов 2',
                },
                maxLength: {
                  value: 30,
                  message: 'максимальное количество символов 30',
                },
                pattern: {
                  value: /^[А-ЯA-Z- -]+$/umi,
                  message: 'Поле name должно содержить только латиницу, кириллицу, пробел или дефис ',
                },
              })}
            ></input>
              <p className="input-error">
                {errors?.name && errors.name.message}
              </p>              
          </div>
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
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: 'Адрес электронной почты невалидный',
                },
              })}
            ></input>
            <p className="input-error">
              {errors?.email && errors.email.message}{' '}
            </p>
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
                  message: 'Минимальное количество символов 8',
                },
              })}
            ></input>
            <p className="input-error">
              {errors?.password && errors.password.message}{' '}
            </p>
          </div>
          <button className="auth__btn" type="submit" disabled={!isValid}>Зарегистрироваться</button>
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
