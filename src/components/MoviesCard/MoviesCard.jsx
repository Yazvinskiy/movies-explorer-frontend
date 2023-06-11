import React from 'react';

import film from '../../images/example.jpg';
import './MoviesCard.css';

const MoviesCard = () => {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <li className="cards-movies__item">
      <img className="cards-movies__image" src={film} alt="постер" />
      <div className="cards-movies__content">
        <h3 className="cards-movies__title">33 слова о дизайне</h3>
        <button className={`cards-movies__like ${isActive ? 'cards-movies__like_active' : ''}`} onClick={handleClick} ></button>
      </div>
      <span className="cards-movies__duration">1ч 42м</span>
    </li>
  );
};

export default MoviesCard;
