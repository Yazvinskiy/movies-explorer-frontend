import React from 'react';
import './Promo.css';
import logo from '../../images/promo-logo.svg'

const Promo = () => {
  return (
    <section className='promo'>
     <div className='promo__container'>
     <img src={logo} alt='promo-logo' className='promo__image'/>
     <div className='promo__info'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a  href='#project' className='promo__link'>Узнать больше</a>
      </div>
     
     </div>
      
      
    </section>
  )
}

export default Promo