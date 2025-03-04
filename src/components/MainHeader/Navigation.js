import React from 'react';

import classes from './Navigation.module.css';

// Создаю компонент Navigation, который принимает props
const Navigation = (props) => {
  return (
    // Создаю навигационный блок
    <nav className={classes.nav}>
      <ul>
        {/* Если пользователь залогинен, показываю пункт "Users" */}
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {/* Если пользователь залогинен, показываю пункт "Admin" */}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* Если пользователь залогинен, показываю кнопку выхода */}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

// Экспортирую компонент Navigation
export default Navigation;


