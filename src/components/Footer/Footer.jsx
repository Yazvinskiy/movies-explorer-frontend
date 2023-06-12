import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h3 className='footer-subtitle'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__wrapper'>
        <p className="footer__copyright">© {currentYear}</p>
        <nav className="footer__menu">
          <ul className="footer__links">
            <li className="footer__item">
            <a href='https://practicum.yandex.ru'  rel="noreferrer" target="_blank" className="footer__link">Яндекс.Практикум</a>
            </li>
           <li className="footer__item">
           <a href='https://github.com/Yazvinskiy'   rel="noreferrer" target="_blank" className="footer__link">Github</a>
            </li>
          </ul>
           </nav>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer