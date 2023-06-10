import React from 'react';
import { NavLink } from 'react-router-dom';
import PopupMenu from '../PopupMenu/PopupMenu';

import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpenPopup] = React.useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  return (
    <>
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
      <button className='navigation__burger' onClick={handleOpenPopup}></button>
       
    </nav>
    <PopupMenu onClose={handleClosePopup} isOpen={isOpen}/>
    </>
    
  );
};

export default Navigation;
