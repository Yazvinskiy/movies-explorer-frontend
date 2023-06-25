import React from 'react';
import { useMatch } from 'react-router-dom';


import './MoviesCard.css';

const MoviesCard = ({ movie, saveMovie, imageSavedMovie, deleteMovie }) => {
  const [isActive, setIsActive] = React.useState(false);
  const savedMoviesPage = useMatch('/saved-movies');
  const movieImage = imageSavedMovie ?? `https://api.nomoreparties.co${movie.image.url}`;
  const durationMovie = (minutes) => {
    return `${Math.round(minutes / 60)}ч ${minutes % 60}мин`;
  };
 
  const handleCardDelete = () => {
    deleteMovie(movie)
  }

  const handleLikeClick = (movie) => {
    setIsActive(!isActive);
    saveMovie(movie)   
  };

  return (
    <li className="cards-movies__item">
      <img className="cards-movies__image" src={ movieImage} alt="постер" />
      <div className="cards-movies__content">
        <h3 className="cards-movies__title">{movie.nameRU}</h3>
        {savedMoviesPage ? (<button    
          className="cards-movies__delete"
          onClick={handleCardDelete}
        ></button>) : ( <button    
          className={`cards-movies__like ${
            movie.isLiked  ? 'cards-movies__like_active' : ''
          }`}
          onClick={()=>handleLikeClick(movie)}
        ></button>) }
       
      </div>
      <span className="cards-movies__duration">
        {durationMovie(movie.duration)}
      </span>
    </li>
  );
};

export default MoviesCard;
