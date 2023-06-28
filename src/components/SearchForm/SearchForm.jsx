import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = ({ OnFilterMovies , onShortFilms, isShortFilms, setSearchValue, searchValue, }) => {
  const [inputValue, setInputValue] = React.useState(searchValue ?? '');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {  
    e.preventDefault();
    if(inputValue === '') {
      setError('Нужно ввести ключевое слово');
    } else {
      setSearchValue(inputValue.toLowerCase())
      OnFilterMovies( inputValue.toLowerCase());
    
    setError('')
    }
    
  };

  return (
    <div className="search-film">
      <form className="search-film__form" onSubmit={handleSubmit}>
        <input
          className="search-film__input"
          placeholder="Фильм"   
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button className="search-film__btn" type="submit" >
          Найти
        </button>
      </form>
      {!inputValue && (<p className="search-film__error">{error}</p>)}
      <FilterCheckbox isShortFilms={isShortFilms} onShortFilms={onShortFilms} />
    </div>
  );
};

export default SearchForm;
