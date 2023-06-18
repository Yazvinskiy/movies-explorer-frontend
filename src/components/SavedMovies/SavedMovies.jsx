import React from 'react';

import {useLocalStorage} from '../../hooks/useLocalStorage';
import { mainApi } from '../../utils/MainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import './SavedMovies.css';

const SavedMovies = () => {
  const [savedFilms, setSavedFilms] = useLocalStorage([], "savedMovies");

  const getSavedMovies = async () => {
    try {
      const savedMovies = await mainApi.getSavedMovies();
      setSavedFilms(savedMovies)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getSavedMovies()
  }, [])
  
  return (
    <div className='saved-movies'>
        <Header/>
      <SearchForm/>
      <MoviesCardList  >{savedFilms.map((movie) => (
          <MoviesCard 
          key={movie._id}
          movie={movie}
          imageSavedMovie = {movie.image}
          />
        ))}</MoviesCardList>
      <button className='movies__btn'>Ещё</button>
      <Footer/>
      </div>
  )
}

export default SavedMovies