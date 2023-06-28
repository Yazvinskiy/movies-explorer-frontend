import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import './Profile.css';

const Profile = ({onSignOut, setUserData, isUpdate, setIsUpdate}) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
   const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm({
    mode: 'all',
  });
 
 const valueName = watch('name')
 const valueEmail = watch('email')
  
  React.useEffect(() => {
    if(currentUser) {
      setValue('name', currentUser.name ?? '');
    setValue('email', currentUser.email ?? '');
    }
  }, [currentUser, setValue]);
 

  const onSubmit = (data) => {
    setUserData(data);
  };
  const handleShow = () => {
    setShowSuccessMessage(true)
    setTimeout(()=> setShowSuccessMessage(false), 2000)
  }

  React.useEffect(() => {
    if(isUpdate ) {
      handleShow()
      setIsUpdate(false)
    }
  }, [isUpdate]);

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
                },
                minLength: {
                  value: 2,
                },
                maxLength: {
                  value: 30,
                },
                pattern: {
                  value: /^[А-ЯA-Z- -]+$/umi,
                },
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
                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                },
              })}></input>
          </div>
          {showSuccessMessage ? <span className='profile__message'>Данные успешно обновлены!</span>
         : <button className="profile__btn profile__btn-edit" type="submit" disabled={ (valueName === currentUser.name &&  valueEmail ===  currentUser.email)  || !isValid} >
          Редактировать
        </button>}
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
