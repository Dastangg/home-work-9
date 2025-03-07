import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

// Создаю компонент MainHeader, который принимает props
const MainHeader = () => {
  return (
    // Создается заголовок страницы
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1> {/* Отображается заголовок */}
      {/* Включается навигация и передаются  пропсы */}
      <Navigation />
    </header>
  );
};

// Экспортирую компонент MainHeader
export default MainHeader;
