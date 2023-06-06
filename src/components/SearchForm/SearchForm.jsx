import React from 'react';

import checkbox from '../../images/smalltumb-active.svg'
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className='search-film'>
      <div className='search-film__container'>
      <input className='search-film__input'></input>
     <button className='search-film__btn'>Найти </button>
      </div>
      <div className='search-film__wrapper'>
        <img className='search-film__image' src={checkbox} alt='чекбокс'/>
        <p className='search-film__text'>Короткометражки</p>
      </div>
    </div>
  )
}

export default SearchForm