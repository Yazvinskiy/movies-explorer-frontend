import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';

const Profile = ({onSignOut, setUserData, onLoading}) => {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });
  
  React.useEffect(() => {
    setValue('name', currentUser.name ?? '');
    setValue('email', currentUser.email ?? '');
  }, [currentUser, setValue]);


  const onSubmit = (data) => {
    onLoading()
    setUserData(data);
  };

  return (

    <div className="profile">
      <Header />
      <div className="profile__container">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="profile__wrapper-input">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input className="profile__input" name="name"  required type="text"
              {...register('name', {
                required: {
                  value: true,
                }
              })}></input>
          </div>
          <div className="profile__wrapper-input">
            <label className="profile__label" htmlFor="email">
              E-mail
            </label>
            <input className="profile__input" type="email" {...register('email', {
                required: {
                  value: true,                 
                },
                minLength: {
                  value: 6, 
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                },
              })}></input>
          </div>
          <button className="profile__btn profile__btn-edit" type="submit" disabled={!isValid} >
          Редактировать
        </button>
        </form>
       
        <Link to={"/"} className='profile__btn-exit'>
          <button className="profile__btn profile__exit" type="button" onClick={onSignOut}>
            Выйти из аккаунта
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
