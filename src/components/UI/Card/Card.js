import React from 'react';

import classes from './Card.module.css';

// Создаю компонент Card, который принимает props
const Card = (props) => {
  return (
    // Применяю стили из CSS-модуля и добавляю внешний класс
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

// Экспортирую компонент Card
export default Card;
