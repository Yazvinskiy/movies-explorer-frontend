import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://github.com/Yazvinskiy/how-to-learn' rel="noreferrer" target="_blank"  className='portfolio__link'>Статичный сайт</a>
          </li>
        <li className='portfolio__item'>
          <a href='https://yazvinskiy.github.io/russian-travel/index.html' rel="noreferrer" target="_blank" className='portfolio__link'>Адаптивный сайт</a>
          </li>
        <li className='portfolio__item'>
          <a href='https://yazvinskiy.github.io/mesto/index.html' rel="noreferrer" target="_blank" className='portfolio__link'>Одностраничное приложение</a>
          </li>
      </ul>
      </div>
    </section>
  )
}

export default Portfolio