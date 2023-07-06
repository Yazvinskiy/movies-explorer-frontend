import React from 'react';

import './Navigation.css';

const Navigation = ({children}) => {

  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        {children}
      </div>
    </nav>
    
  );
};

export default Navigation;
