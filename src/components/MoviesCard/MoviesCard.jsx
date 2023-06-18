import React from 'react';

import './MoviesCard.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const MoviesCard = ({ movie, saveMovie, savedFilms, imageSavedMovie}) => {
  
  // function n(cardId){
  //    const isLiked = savedFilms.some((i) => i.movieId === cardId);
  //    return isLiked
  // }
  // console.log(isLiked)
  const [isActive, setIsActive] = React.useState(false);

  const movieImage =imageSavedMovie ?? `https://api.nomoreparties.co${movie.image.url}`;
  const durationMovie = (minutes) => {
    return `${Math.round(minutes / 60)}ч ${minutes % 60}мин`;
  };

  const handleClick = (movie) => {
    setIsActive(!isActive);
    saveMovie(movie)
  };

  return (
    <li className="cards-movies__item">
      <img className="cards-movies__image" src={ movieImage} alt="постер" />
      <div className="cards-movies__content">
        <h3 className="cards-movies__title">{movie.nameRU}</h3>
        <button
       
          className={`cards-movies__like ${
            isActive  ? 'cards-movies__like_active' : ''
          }`}
          onClick={()=>handleClick(movie)}
        ></button>
      </div>
      <span className="cards-movies__duration">
        {durationMovie(movie.duration)}
      </span>
    </li>
  );
};

export default MoviesCard;
