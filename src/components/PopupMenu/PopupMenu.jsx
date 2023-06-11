import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './PopupMenu.css';

const PopupMenu = ({ onClose, isOpen }) => {
  React.useEffect(() => {
    // ограничиваем навешивание обработчика: если не открыт, то не нужно навешивать
    if (!isOpen) return;
    // объявляем внутри `useEffect` функцию, чтобы она не теряла ссылку при перерисовке компонента
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);
    // обязательно удаляем обработчик в `clean-up` функции
    return () => document.removeEventListener('keydown', closeByEscape);
    // обязательно следим за `isOpen`, чтобы срабатывало только при открытии, а не всегда
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      <div className="popup" onClick={handleOverlay}></div>
      <div className="popup-menu">
        <button className="close-btn" type="button" onClick={onClose}></button>
          <nav>
            <ul className="popup-menu__list">
              <NavLink to={'/'} className="popup-menu__item">Главная</NavLink>
              <NavLink to={'/movies'} className="popup-menu__item">Фильмы</NavLink>
              <NavLink to={'/saved-movies'} className="popup-menu__item">Сохранённые фильмы</NavLink>
            </ul>
          </nav>
          <Link to={'/profile'}>
            <button className="popup-menu__btn">Аккаунт</button>
          </Link>  
      </div>
    </>
  ) : (
    ''
  );
};

export default PopupMenu;
