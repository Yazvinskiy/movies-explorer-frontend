import React from 'react';

import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';

const Main = ({loggedIn}) => {
 
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer /> 
    </>
  );
};

export default Main;
