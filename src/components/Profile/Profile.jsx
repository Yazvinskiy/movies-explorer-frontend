import React from 'react';

import Header from '../Header/Header';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">Привет, Владимир!</h2>
        <form className="profile__form">
          <div className="profile__wrapper-input">
            <label className="profile__label">Имя</label>
            <input className="profile__input"></input>
          </div>
          <div className="profile__wrapper-input">
          <label className="profile__label">E-mail</label>
            <input className="profile__input"></input>
          </div>
        </form>
        <button className="profile__btn profile__btn-edit" type="submit">
          Редактировать
        </button>
        <button className="profile__btn profile__btn-exit" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default Profile;
