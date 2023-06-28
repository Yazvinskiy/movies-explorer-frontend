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

const SavedMovies = ({loggedIn}) => {
  const [widthOfScreen, setWidthOfScreen] = React.useState(window.innerWidth);
  const [cardsToLoad, setCardsToLoad] = React.useState(0)
  const [saveMovies, setSaveMovies] = React.useState([]);
  const [isShortFilms, setIssShortFilms] = React.useState(false);
  const [searchFilms, setSearchFilms] =  React.useState([]);
  const [searchValue, setSearchValue] =  React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [updateSavedFilms, setUpdateSavedFilms] = React.useState(null)

  const getSavedMovies = async () => {
    setIsLoading(true)
    try {
      const savedMovies = await mainApi.getSavedMovies();
      // localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      setSaveMovies(savedMovies)
    //  const a = localStorage.getItem('savedMovies', saveMovies)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
  }
  }

  const deleteMovie = async (movie) => {
    try {
    const film =  await mainApi.deleteMovie(movie._id);
    // localStorage.getItem('savedMovies')
    setUpdateSavedFilms(film)
    } catch (error) {
     console.log(error) 
    }
  }

  // React.useEffect(() => {
  //   if(!loggedIn){
  //     setSaveMovies('')
  //   }
  // }, [loggedIn]);

  React.useEffect(() => {
    getSavedMovies()
  //  localStorage.getItem('savedMovies', saveMovies)
  }, [updateSavedFilms]);

  const handlerFilterMovies = useCallback((inputValue) => {
    if(!searchValue){
      return []
    } 
    else if(isShortFilms){
      const search = saveMovies.filter((movie) => {
        return( movie.duration < 40 &&
          movie.nameRU.toLowerCase()
          .includes(inputValue )
           )   
      });
      setSearchFilms(search);
    } else {
      const search = saveMovies.filter((movie) => {
        return(  movie.nameRU.toLowerCase()
          .includes(inputValue)
           )
      });
      setSearchFilms(search);
    }
  }, [searchValue, saveMovies, isShortFilms])
  
  const handleClickBtnMore = () => {
    widthOfScreen < 1280 ? setCardsToLoad((p) => p + 2) : setCardsToLoad((p) => p + 4)
  }

  const moviesToRender = useMemo(() => {
   const countOfFilms =  widthOfScreen >= 1280 ?  16 :
    widthOfScreen < 768 ? 4 : 8;
   return  searchFilms.slice(0, countOfFilms + cardsToLoad)
  //  .map((movie) => ({
  //   ...movie, 
  //   isLiked: saveMovies.some((m) => m.movieId === movie.id)
  //  }))
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

  React.useEffect(() => {
    // if(isShortFilms){
    //   const search = saveMovies.filter((movie) => {
    //     return movie.duration < 40     
    //   });
    //   setSearchFilms(search); 
    // } else{
    //   setSearchFilms(saveMovies)
    // }
    handlerFilterMovies(searchValue)
    
}, [isShortFilms, searchValue]);

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
                    : 
                    searchValue && !searchFilms.length ? (<h2 className="saved-movies-error">{NOTFOUND_ERROR}</h2>)
                   : <>
                    <MoviesCardList  >{arrayToRender.map((movie) => (
                      <MoviesCard 
                      key={movie._id}
                      movie={movie}
                      imageSavedMovie = {movie.image}
                      deleteMovie = {deleteMovie}
                      />
                    ))}</MoviesCardList>
                  {searchFilms > moviesToRender  &&
                    <button className="movies__btn" onClick={handleClickBtnMore}>Ещё</button>}
                     </>
      }
      <Footer/>
      </div>
  )
}

export default SavedMovies