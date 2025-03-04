import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

// Создаю компонент MainHeader, который принимает props
const MainHeader = (props) => {
  return (
    // Создается заголовок страницы
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1> {/* Отображается заголовок */}
      {/* Включается навигация и передаются  пропсы */}
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

// Экспортирую компонент MainHeader
export default MainHeader;
