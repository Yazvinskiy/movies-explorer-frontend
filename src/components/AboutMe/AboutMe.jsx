import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.png';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент </h2>
        <div className="about-me__info">
          <img src={avatar} className="about-me__image" alt="аватар" />
          <h3 className="about-me__subtitle">Владимир</h3>
          <h4 className="about-me__caption">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href="https://github.com/Yazvinskiy"
            rel="noreferrer"
            target="_blank"
            className="about-me__link"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
