import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <NavLink to={'/movies'} className="navigation__link">
          Фильмы
        </NavLink>
        <NavLink to={'/saved-movies'} className="navigation__link">
          Сохранённые фильмы
        </NavLink>
        <NavLink to={'/profile'} className="navigation__link ">
        <button className='navigation__btn'>Аккаунт</button>
        </NavLink>
      </div>
      <button className='navigation__burger'></button>
    </nav>
  );
};

export default Navigation;
