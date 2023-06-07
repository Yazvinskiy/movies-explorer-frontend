import React from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <div className='saved-movies'>
        <Header/>
      <SearchForm/>
      <MoviesCardList/>
      <button className='movies__btn'>Ещё</button>
      <Footer/>
      </div>
  )
}

export default SavedMovies