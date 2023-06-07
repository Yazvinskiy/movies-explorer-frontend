import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {

  return (
    <div className='search-film'>
      <div className='search-film__container'>
      <input className='search-film__input' placeholder="Фильм"></input>
     <button className='search-film__btn'>Найти </button>
      </div>
      <FilterCheckbox/>
    </div>
  )
}

export default SearchForm