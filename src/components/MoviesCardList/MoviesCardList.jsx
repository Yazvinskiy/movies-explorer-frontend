import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = () => {
  return (
    <div className="cards-movies__container">
      <ul className="cards-movies__list">
      <MoviesCard/>     
      <MoviesCard/> 
      <MoviesCard/> 
      <MoviesCard/> 
      <MoviesCard/> 
      <MoviesCard/> 
      <MoviesCard/> 
      <MoviesCard/> 
      </ul>
    </div>
  )
}

export default MoviesCardList