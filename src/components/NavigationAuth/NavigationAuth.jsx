import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationAuth.css';
import Navigation from '../Navigation/Navigation';
import PopupMenu from '../PopupMenu/PopupMenu';

const NavigationAuth = () => {
    const [isOpen, setIsOpenPopup] = React.useState(false);

    const handleOpenPopup = () => {
      setIsOpenPopup(true);
    };
  
    const handleClosePopup = () => {
      setIsOpenPopup(false);
    };
  return (
    <>
    <div className='wrapper'>
        <Navigation>
    <NavLink to={'/movies'} className="navigation__link">
     Фильмы
   </NavLink>
   <NavLink to={'/saved-movies'} className="navigation__link">
     Сохранённые фильмы
   </NavLink>
   <NavLink to={'/profile'} className="navigation__link ">
   <button className='navigation__btn'>Аккаунт</button>
   </NavLink> 
  </Navigation>
  </div>
      
       <button className='navigation__burger' onClick={handleOpenPopup}></button>
<PopupMenu onClose={handleClosePopup} isOpen={isOpen}/>
    </>
     


  )
}

export default NavigationAuth