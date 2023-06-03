import React from 'react';

import './NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found-page__container'>
    <h2 className='not-found-page__title'>404</h2>
    <h4 className='not-found-page__subtitle'>Страница не найдена</h4>
    <a href='/' className='not-found-page__link'>Назад</a>
    </div>
  )
}

export default NotFound