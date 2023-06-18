import React, { useEffect, useCallback } from 'react';

import { apiMovies } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import {useLocalStorage} from '../../hooks/useLocalStorage'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = () => {
  const [allFilms, setAllFilms] = useLocalStorage([], "allMovies");
  const [shortsFilms, setShortsFilms] = useLocalStorage([], "shortMovies");
  
  // const [shortsFilms, setShortsFilms] = React.useState([]);
  

  const getMovies = useCallback(async () => {
    try {
      const movies = await apiMovies.getMovies();
       setAllFilms(movies);
       getShortsFilms(movies);
    } catch (error) {
      console.log(error);
    }
  }, []);


  const saveMovie = async (data) => {
    try {
       await mainApi.saveMovie(data);
      
    } catch (error) {
      console.log(error)
    }
  }

  const deleteMovie = async (id) => {
    try {
      const movie = await mainApi.deleteMovie(id)
    } catch (error) {
     console.log(error) 
    }
  }

  const getShortsFilms = useCallback(() => {
    const films = allFilms.filter((film) => film.duration <= 40);
    setShortsFilms(films);
  }, []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="movies">
        <Header />
        <SearchForm shortsFilms={shortsFilms} />
        <MoviesCardList  >{allFilms.map((movie) => (
          <MoviesCard 
          key={movie.id}
          movie={movie}
          saveMovie={saveMovie}
          // savedFilms={savedFilms}
        
          />
        ))}</MoviesCardList>
        <button className="movies__btn">Ещё</button>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
