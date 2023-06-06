import React from 'react';

import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css';
import Navigation from '../Navigation/Navigation';

const Main = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
      <Navigation/>
    </>
  );
};

export default Main;
