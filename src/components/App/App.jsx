import { React, useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation  } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { signUp, signIn, checkAuth } from '../../utils/auth';
import { mainApi } from '../../utils/MainApi';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [infoToolStatus, setInfoToolStatus] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSingUp = async (data) => {
    try {
      await signUp(data);
      setInfoToolStatus(true);
      setIsInfoTooltipPopupOpen(true);
      const jwt = await signIn(data);
      localStorage.setItem('jwt', jwt.token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
      setInfoToolStatus(false);
      setIsInfoTooltipPopupOpen(true);
    }
  };

  const handleSingIn = async (data) => {
    try {
      const jwt = await signIn(data);
      localStorage.setItem('jwt', jwt.token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      console.log(error);
      setInfoToolStatus(false);
      setIsInfoTooltipPopupOpen(true);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchValue');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('searchMovies');
    localStorage.removeItem('isShortFilms');
    localStorage.removeItem('allMovies');
    setLoggedIn(false);
    navigate('/');
  };

  const getUserData = async () => {
    try {
      const userInfo = await mainApi.getUserData();
      setCurrentUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const setUserData = async (data) => {
    try {
      const userInfo = await mainApi.setUserData(data);
      setCurrentUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(loggedIn){
      getUserData();
    }
  }, [loggedIn]);


  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      checkAuth(jwt).then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        const loc = location.pathname
        if( loc === '/signup' || loc === '/signin' || loc === '/'){
          navigate('/movies'); 
        } else if(loc === '/movies' || loc === '/saved-movies' || loc === '/profile'){
          navigate(-1); 
        }
      })
      .catch((err) => console.log(err))
    }
  }, []);

  const handleClosePopup = () => {
    setIsInfoTooltipPopupOpen(false);
  };

  const handleLoading = () => {
    setIsLoader(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn}/>} />
          <Route
            path="/signin"
            element={
              <Login onSubmit={handleSingIn} onLoading={handleLoading} />
            }
          />
          <Route
            path="/signup"
            element={
              <Register onSubmit={handleSingUp} onLoading={handleLoading} />
            }
          />
          <Route
            path="/movies"
            element={<ProtectedRoute element={Movies} loggedIn={loggedIn} />}
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onLoading={handleLoading}
                onSignOut={handleSignOut}
                setUserData={setUserData}
              />
            }
          /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={handleClosePopup}
          infoToolStatus={infoToolStatus}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
