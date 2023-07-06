import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({children}) => {
 
  return (
    <div className="cards-movies__container">
      <ul className="cards-movies__list">
        {children}
      </ul>
    </div>
  )
}

export default MoviesCardList