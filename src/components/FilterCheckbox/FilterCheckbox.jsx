import React from 'react';

import tumb_off from '../../images/smalltumb-off.svg'
import tumb_on from '../../images/smalltumb-on.svg'
import './FilterCheckbox.css';

const FilterCheckbox = ({ onShortFilms, isShortFilms}) => {
  
  const handleClick = () => {
   onShortFilms();
  };

  return (
    <div className='checkbox'>
    <img className='checkbox__image' onClick={handleClick} src={isShortFilms ? tumb_on : tumb_off} alt='чекбокс'/>
    <p className='checkbox__text'>Короткометражки</p>
  </div>
  )
}

export default FilterCheckbox