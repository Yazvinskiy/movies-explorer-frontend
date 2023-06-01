import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import './Main.css';



const Main = () => {
  return (
    <>
     <Header/>
    <main className='main'>
      <Promo/>
      <AboutProject/>
      <Techs/>
      </main>
      <Footer/>
    </>
  )
}

export default Main