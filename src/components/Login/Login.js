import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

// Компонент Login для аутинтификации пользователя
const Login = (props) => {
  // Состояния для ввода email и его валидации
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  
  // Состояния для ввода пароля и его валидации
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  
  // Состояние для проверки валидности всей формы
  const [formIsValid, setFormIsValid] = useState(false);

  // Обработчик изменения email
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    
    // Проверка валидности формы
    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  // Обработчик изменения пароля
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // Проверка валидности формы
    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  // Проверка валидности email при потере фокуса
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  // Проверка валидности пароля при потере фокуса
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  // Обработчик отправки формы
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

// Экспорт компонента Login
export default Login;
