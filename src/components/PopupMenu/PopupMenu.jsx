import React from 'react';

import './PopupMenu.css';

const PopupMenu = () => {
  return (
    <dialog open="open" className="popup-menu">
      <button className="close-btn" type="button"></button>
      <div className='popup-menu__wrapper'>
      <nav>
        <ul className="popup-menu__list">
          <li className="popup-menu__item">Главная</li>
          <li className="popup-menu__item">Фильмы</li>
          <li className="popup-menu__item">Сохранённые фильмы</li>
        </ul>
      </nav>
      {/* <button type="button" onclick="window.closeMe.close();">
    Закрыть с помощью JS
  </button> */}
  <button className='popup-menu__btn'>Аккаунт</button>
      </div>
    </dialog>
  );
};

export default PopupMenu;
