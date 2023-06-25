import React,{useMemo, useCallback} from 'react';

import { mainApi } from '../../utils/MainApi';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';
import { NOTFOUND_ERROR } from "../../utils/constants";

const SavedMovies = () => {
  const [films, SetFilms] = React.useState(null)
  const [widthOfScreen, setWidthOfScreen] = React.useState(window.innerWidth);
  const [cardsToLoad, setCardsToLoad] = React.useState(0)
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isShortFilms, setIssShortFilms] = React.useState(false);
  const [searchFilms, setSearchFilms] =  React.useState([]);
  const [searchValue, setSearchValue] =  React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const getSavedMovies = async () => {
    setIsLoading(true)
    try {
      const savedMovies = await mainApi.getSavedMovies();
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      setSaveMovies(savedMovies)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
  }
  }

  const deleteMovie = async (movie) => {
    try {
    const film =  await mainApi.deleteMovie(movie._id)
     SetFilms(film)
    } catch (error) {
     console.log(error) 
    }
  }

  React.useEffect(() => {
    getSavedMovies()
   localStorage.getItem('savedMovies', saveMovies)
  }, [films]);


  const handlerFilterMovies = useCallback(() => {
    if(!searchValue){
      return []
    } 

    const search = saveMovies.filter((movie) => {
      const nameRU = movie.nameRU.toLowerCase();
      const nameEN = movie.nameEN.toLowerCase();
      if(isShortFilms && movie.duration > 40) {
        return false
      }
      return nameRU.includes(searchValue) || nameEN.includes(searchValue);
    });
    setSearchFilms(search);
  },[searchValue, saveMovies, isShortFilms])

  
  const handleClickBtnMore = () => {
    widthOfScreen < 1280 ? setCardsToLoad((p) => p + 2) : setCardsToLoad((p) => p + 4)
  }

  const moviesToRender = useMemo(() => {
   const countOfFilms =  widthOfScreen >= 1280 ?  16 :
    widthOfScreen < 768 ? 4 : 8;
   return  searchFilms.slice(0, countOfFilms + cardsToLoad)
   .map((movie) => ({
    ...movie, 
    isLiked: saveMovies.some((m) => m.movieId === movie.id)
   }))
  }, [ cardsToLoad, widthOfScreen, searchFilms, saveMovies])

  const handleResize = () => {
    setWidthOfScreen(window.innerWidth);
  };
  
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  const getShortMovies = () => {
    setIssShortFilms(!isShortFilms);
  };

  const arrayToRender = moviesToRender.length  ? moviesToRender : saveMovies;

  return (
    <div className='saved-movies'>
        <Header/>
      <SearchForm
       OnFilterMovies={handlerFilterMovies}    
       isShortFilms={isShortFilms}
       setSearchValue={setSearchValue}
       searchValue={searchValue}
       onShortFilms={getShortMovies}
          />
         {isLoading
                    ? <Preloader />
                    
                    : (<>
                    {searchFilms && !arrayToRender.length && (<h2 className="movies-error-title">{NOTFOUND_ERROR}</h2>)}
                    <MoviesCardList  >{arrayToRender.map((movie) => (
                      <MoviesCard 
                      key={movie._id}
                      movie={movie}
                      imageSavedMovie = {movie.image}
                      deleteMovie = {deleteMovie}
                      />
                    ))}</MoviesCardList>
                  {searchFilms > moviesToRender  &&
                    <button className="movies__btn" onClick={handleClickBtnMore}>Ещё</button>} </>)
      }
      <Footer/>
      </div>
  )
}

export default SavedMovies