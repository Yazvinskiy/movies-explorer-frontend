import React from 'react';

import like from '../../images/like-inective.svg';
import film from '../../images/example.jpg';
import './MoviesCard.css';

const MoviesCard = () => {
  return (
        <li className="cards-movies__item">
          <img className="cards-movies__image" src={film} alt="постер" />
          <div className="cards-movies__content">
            <h3 className="cards-movies__title">33 слова о дизайне</h3>
            <img className="cards-movies__like" src={like} alt="like"/>
          </div>
          <span className="cards-movies__duration">1ч 42м</span>
        </li>
  );
};

export default MoviesCard;
