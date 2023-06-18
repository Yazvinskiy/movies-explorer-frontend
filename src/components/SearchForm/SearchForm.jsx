import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({shortsFilms}) => {

  return (
    <div className='search-film'> 
        <form className='search-film__form'>
        <input className='search-film__input' placeholder="Фильм" required></input>
     <button className='search-film__btn' type="submit">Найти </button>
        </form>
      <FilterCheckbox shortsFilms={shortsFilms}/>
    </div>
  )
}

export default SearchForm