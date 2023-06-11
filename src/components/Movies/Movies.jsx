import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  return (
    <>
    
      <div className="movies">
      <Header />
        <SearchForm />
        <MoviesCardList />
        <button className="movies__btn">Ещё</button>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
