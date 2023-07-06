import React, { useCallback, useMemo } from 'react';

import { apiMovies } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import Preloader from '../Preloader/Preloader';
import { NOTFOUND_ERROR } from "../../utils/constants";

const Movies = ({loggedIn}) => {
 
  const [allFilms, setAllFilms] = useLocalStorage([], 'allMovies');
  const [savedFilms, setSavedFilms] = useLocalStorage([], "savedMovies");
  const [searchFilms, setSearchFilms] = useLocalStorage([], 'searchMovies');
  const [searchValue, setSearchValue] = useLocalStorage('', 'searchValue');
  const [isShortFilms, setIssShortFilms] = useLocalStorage(false, 'isShortFilms');
  const [widthOfScreen, setWidthOfScreen] = React.useState(window.innerWidth);
  const [cardsToLoad, setCardsToLoad] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(false);
  const [updateSavedFilms, setUpdateSavedFilms] = React.useState(null)
 
  const getMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const movies = await apiMovies.getMovies();
      setAllFilms(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
  }
  }, []);

  

  const saveMovie = async (data) => {
    try {
      if(!data.isLiked){
        const movie =  await mainApi.saveMovie(data);  
        setSavedFilms([...savedFilms, movie])  
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = async (movie) => {
    try {
      const movieToDelete = savedFilms.find((f) => f.movieId === movie.id)
     const film = await mainApi.deleteMovie(movieToDelete._id );
     setUpdateSavedFilms(film)
    } catch (error) {
     console.log(error) 
    }
  }

  const getSavedMovies = async () => {
    setIsLoading(true)
    try {
      const savedMovies = await mainApi.getSavedMovies();
      setSavedFilms(savedMovies)
     
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
  }
  }

  React.useEffect(() => {
    handlerFilterMovies(searchValue) 
}, [isShortFilms, searchValue]);

  const handlerFilterMovies = useCallback((inputValue) => {
    if(!searchValue){
      return []
    } 
    else if(isShortFilms){
      const search = allFilms.filter((movie) => {
        return( movie.duration < 40 &&
          movie.nameRU.toLowerCase()
          .includes(inputValue )
           )
      });
      setSearchFilms(search);
    } else {
      const search = allFilms.filter((movie) => {
        return(  movie.nameRU.toLowerCase()
          .includes(inputValue)
           )
      });
      setSearchFilms(search);
    }
  },[allFilms, isShortFilms, searchValue, setSearchFilms])

  const handleClickBtnMore = () => {
    widthOfScreen < 1280 ? setCardsToLoad((c) => c + 2) : setCardsToLoad((c) => c + 4)
  }

  const moviesToRender = useMemo(() => {
    
   const countOfFilms =  widthOfScreen >= 1280 ?  16 :
    widthOfScreen < 768 ? 4 : 8;
   return  searchFilms.slice(0, countOfFilms + cardsToLoad)
   .map((movie) => ({
    ...movie, 
    isLiked: savedFilms.some((m) => m.movieId === movie.id)
   }))
  }, [ cardsToLoad, widthOfScreen, searchFilms, savedFilms])
  
  const handleResize = () => {
    setWidthOfScreen(window.innerWidth);
  };
  
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  
  }, []);

  React.useEffect(() => {
    getMovies();
  }, []);

  React.useEffect(() => {
    getSavedMovies()
  }, [updateSavedFilms]);

  const getShortMovies = () => {
    setIssShortFilms(!isShortFilms);
  };

  return (
    <>
      <div className="movies">
        <Header />
        <SearchForm
          OnFilterMovies={handlerFilterMovies}
          onShortFilms={getShortMovies}
          isShortFilms={isShortFilms}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        {isLoading
                    ? <Preloader />
                    
                    : (<>
                    {searchValue && !moviesToRender.length && (<h2 className="movies-error-title">{NOTFOUND_ERROR}</h2>)}
                    <MoviesCardList>
          {searchValue && moviesToRender.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
            />
          ))}
        </MoviesCardList>
        {searchFilms > moviesToRender  &&
        <button className="movies__btn" onClick={handleClickBtnMore}>Ещё</button>} </>)
      }
        
      </div>
      <Footer />
    </>
  );
};

export default Movies;
