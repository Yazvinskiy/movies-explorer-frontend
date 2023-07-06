import React from 'react';
import { Link } from 'react-router-dom';

import './Unauthorized.css';
import Navigation from '../Navigation/Navigation';

const Unauthorized = () => {
    
  return (
         <Navigation>
        <Link to={'/signup'} className="header__link">
            Регистрация
          </Link>
          <Link to={'/signin'} className="header__button">
            Войти
          </Link>
       </Navigation>
  )
}

export default Unauthorized